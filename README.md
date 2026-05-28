# Backend Assignment

A production-style backend project built using Node.js, Express.js, MySQL, Sequelize ORM, JWT authentication, and Discord bot integration.

## Features

* User signup and login
* Password hashing with bcrypt
* JWT token generation after authentication
* Duplicate username validation
* MySQL database with Sequelize ORM
* Discord bot with slash commands
* Environment variables using `.env`
* REST API structure

## Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT
* bcryptjs
* discord.js
* dotenv

## API Endpoints

### Auth APIs

* `POST /api/v1/auth/signup`
* `POST /api/v1/auth/login`

## Discord Commands

* `/ppcreateuser`
* `/ppcreateservice`
* `/ppgetuser`

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd backend-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000

DB_NAME=assignment_db
DB_USER=root
DB_PASS=
DB_HOST=localhost

JWT_SECRET=mysecretkey

DISCORD_TOKEN=your_discord_token
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_GUILD_ID=your_discord_server_id
```

### 4. Create MySQL database

```sql
CREATE DATABASE assignment_db;
```

### 5. Run the project

```bash
npm run dev
```

## Postman Collection

Postman collection is included in the project root folder.

## Deployment URL

https://backend-assignment-in3c.onrender.com

## Discord Bot Invite Link

https://discord.com/oauth2/authorize?client_id=1509566777972228347&permissions=2147485696&integration_type=0&scope=bot+applications.commands
