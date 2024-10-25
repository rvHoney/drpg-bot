/**
 * Main entry point for the bot.
 * 
 * This file is responsible for creating the bot client and logging in.
 */

import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();
const token = process.env.TOKEN as string;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
  logger.info(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token).catch(error => {
  logger.error(`Failed to login: ${error.message}`);
});