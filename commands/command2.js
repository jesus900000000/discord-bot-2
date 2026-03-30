import { SlashCommandBuilder } from 'discord.js';
import { startYapping, stopYapping } from '../utils/yapper.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Control the yapping')
    .addSubcommand(sub =>
      sub
        .setName('start')
        .setDescription('Starts pinging...')
    )
    .addSubcommand(sub =>
      sub
        .setName('stop')
        .setDescription('Stops pinging...')
    ),

  async execute(interaction) {
    const sub = interaction.options.getSubcommand();

    if (sub === 'start') {
      startYapping(interaction.channel);
      return await interaction.reply('im alive');
    }

    if (sub === 'stop') {
      stopYapping();
      return await interaction.reply('ping closed');
    }
  }
};
