# Backend Assignment

A production-style backend project built using Node.js, Express.js, MySQL, Sequelize ORM, JWT authentication, and Discord bot integration.

## Features

- User signup and login
- Password hashing with bcrypt
- JWT token generation after authentication
- Duplicate username validation
- MySQL database with Sequelize ORM
- Discord bot with slash commands
- Environment variables using `.env`
- REST API structure

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT
- bcryptjs
- discord.js
- dotenv

## API Endpoints

### Auth
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/login`

## Discord Commands

- `/ppcreateuser`
- `/ppcreateservice`
- `/ppgetuser`

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd backend-assignment

Deployment URL: https://backend-assignment-in3c.onrender.com

Discord bot invite link- https://discord.com/oauth2/authorize?client_id=1509566777972228347&permissions=2147485696&integration_type=0&scope=bot+applications.commands