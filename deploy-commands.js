import dotenv from 'dotenv';
dotenv.config();

import { REST, Routes } from 'discord.js';
import fs from 'fs';
import path from 'path';

if (!process.env.CLIENT_ID) {
  console.error('❌ CLIENT_ID missing in .env');
  process.exit(1);
}
if (!process.env.DISCORD_TOKEN) {
  console.error('❌ DISCORD_TOKEN missing in .env');
  process.exit(1);
}
if (!process.env.GUILD_ID) {
  console.error('❌ GUILD_ID missing in .env');
  process.exit(1);
}

const commands = [];

const commandsPath = path.join(process.cwd(), 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const { default: command } = await import(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log('Registering slash commands for guild...');
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands },
  );
  console.log('✅ Slash commands registered for guild', process.env.GUILD_ID);
} catch (error) {
  console.error(error);
}
