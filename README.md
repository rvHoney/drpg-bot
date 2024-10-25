# DRPG Bot
DRPG Bot is a Discord bot built with TypeScript and Discord.js. It is designed to be a simple and easy-to-use bot for playing a medieval-themed RPG game in Discord servers.

## Prerequisites
- [Node.js](https://nodejs.org) (version 18 or higher)
- [npm](https://www.npmjs.com) (version 10 or higher)
- [Docker](https://www.docker.com) (optional)
- [Docker Compose](https://docs.docker.com/compose) (optional)

## Installation
1. **Clone the repository:**
   ```sh
   git clone
   cd drpg-bot
   ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Set up environment variables:**
    - Rename `.env.example` to `.env` and fill in the required values.
4. **Build the project:**
    ```sh
    npm run build
    ```
5. **Run the bot:**
    ```sh
    npm start
    ```

## Docker
1. **Build the Docker image:**
    ```sh
    docker-compose build
    ```
2. **Run the Docker container:**
    ```sh
    docker-compose up
    ```
3. **Stop the Docker container:**
    ```sh
    docker-compose down
    ```
    
## Scripts
- `npm run build`: Builds the project.
- `npm start`: Starts the bot.
- `npm test`: Runs tests.

## License
This project is licensed under the ISC License. See the LICENSE file for more details.