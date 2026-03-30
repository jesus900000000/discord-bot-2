import { SlashCommandBuilder } from 'discord.js';
import { startYapping, stopYapping } from '../utils/yapper.js';

export default {
  data: new SlashCommandBuilder()
    .setName('yapper')
    .setDescription('Control the yapping')
    .addSubcommand(sub =>
      sub
        .setName('start')
        .setDescription('Start yapping in this channel')
    )
    .addSubcommand(sub =>
      sub
        .setName('stop')
        .setDescription('Stop yapping')
    ),

  async execute(interaction) {
    const sub = interaction.options.getSubcommand();

    if (sub === 'start') {
      startYapping(interaction.channel);
      return await interaction.reply('🗣️ **Yapper started!**');
    }

    if (sub === 'stop') {
      stopYapping();
      return await interaction.reply('🛑 **Yapper stopped.**');
    }
  }
};
