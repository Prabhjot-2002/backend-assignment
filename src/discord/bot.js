require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const User = require("../models/User");
const Service = require("../models/Service");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // create user
  if (interaction.commandName === "ppcreateuser") {
    try {
      await interaction.deferReply();

      const username = `user_${Date.now()}`;

      const user = await User.create({
        username,
        password: "123456",
      });

      return interaction.editReply(`User created: ${user.username}`);
    } catch (error) {
      console.log(error);
      return interaction.editReply("Failed to create user");
    }
  }

  // create service
  if (interaction.commandName === "ppcreateservice") {
    try {
      await interaction.deferReply();

      const service = await Service.create({
        name: `service_${Date.now()}`,
        description: "Created from discord bot",
      });

      return interaction.editReply(`Service created: ${service.name}`);
    } catch (error) {
      console.log(error);
      return interaction.editReply("Failed to create service");
    }
  }

  // get latest user
  if (interaction.commandName === "ppgetuser") {
    try {
      await interaction.deferReply();

      const user = await User.findOne({
        order: [["id", "DESC"]],
      });

      if (!user) {
        return interaction.editReply("No user found");
      }

      return interaction.editReply(`User: ${user.username}`);
    } catch (error) {
      console.log(error);
      return interaction.editReply("Failed to fetch user");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
