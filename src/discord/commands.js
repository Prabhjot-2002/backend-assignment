require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("ppcreateuser")
    .setDescription("Create a new user"),

  new SlashCommandBuilder()
    .setName("ppcreateservice")
    .setDescription("Create a service"),

  new SlashCommandBuilder()
    .setName("ppgetuser")
    .setDescription("Get user details"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID,
      ),
      { body: commands },
    );

    console.log("Slash commands registered");
  } catch (error) {
    console.log(error);
  }
})();
