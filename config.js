/**
 * Darkvenom v1 - Configuration
 * All bot configuration settings are defined here
 */

const config = {
  // Bot information
  name: 'Darkvenom',
  version: 'v1.1.1',
  
  // Owner information
  owner: {
    name: 'Darkvenom',
    phoneNumber: '254114629260',
    isGlobalOwner: true
  },
  
  // General settings
  commandPrefix: process.env.BOT_PREFIX || '!',
  
  // Logging settings
  logging: {
    level: process.env.LOG_LEVEL || 'info', // debug, info, warn, error
    logToFile: process.env.LOG_TO_FILE === 'true' || false,
    logFilePath: process.env.LOG_FILE_PATH || './logs/bot.log',
  },
  
  // Performance settings
  performance: {
    maxConcurrentCommands: 5,
  },
  
  // Command timeout in milliseconds
  commandTimeout: 5000,
  
  // Group settings
  group: {
    enabled: true,
    adminCommands: ['kick', 'ban', 'promote', 'demote'],
    memberCommands: ['info', 'rules', 'members'],
    maxMembers: 256,
    welcomeMessage: 'Welcome to the group! Please read the rules.',
    
    // Antilink settings
    antilink: {
      enabled: false,
      autoKick: false,
      warnings: true,
      maxWarnings: 3,
      whitelist: ['whatsapp.com', 'example.com']
    },
  },
};

module.exports = config;
