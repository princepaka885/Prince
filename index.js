/**
 * Darkvenom v1 - A modular Node.js bot
 * Main application entry point
 */

const readline = require('readline');
const config = require('./config');
const { loadCommands } = require('./commands');
const { executeStartupEvents, executeShutdownEvents } = require('./events');
const { logger } = require('./utils/logger');
const { parseCommand } = require('./utils/commandParser');
const { handleError } = require('./utils/errorHandler');

// Bot state
const botState = {
  running: false,
  commands: {},
  startTime: null,
};

/**
 * Initialize the bot
 */
async function initializeBot() {
  try {
    logger.info('Initializing Darkvenom v1 bot...');
    
    // Load all commands
    botState.commands = await loadCommands();
    logger.info(`Loaded ${Object.keys(botState.commands).length} commands`);
    
    // Execute startup events
    await executeStartupEvents(botState);
    
    botState.running = true;
    botState.startTime = new Date();
    logger.success('Darkvenom v1 bot is now online');
    
    return true;
  } catch (error) {
    handleError('Bot initialization failed', error);
    return false;
  }
}

/**
 * Shutdown the bot gracefully
 */
async function shutdownBot() {
  try {
    logger.info('Shutting down Darkvenom v1 bot...');
    
    // Execute shutdown events
    await executeShutdownEvents(botState);
    
    botState.running = false;
    logger.success('Darkvenom v1 bot has been shut down');
    
    process.exit(0);
  } catch (error) {
    handleError('Bot shutdown failed', error);
    process.exit(1);
  }
}

/**
 * Process a user command
 */
async function processCommand(input) {
  try {
    if (!input || input.trim() === '') return;
    
    const { command, args } = parseCommand(input);
    
    if (command === 'exit' || command === 'quit') {
      await shutdownBot();
      return;
    }
    
    if (botState.commands[command]) {
      await botState.commands[command].execute(args, botState);
    } else {
      logger.warn(`Unknown command: ${command}`);
      logger.info('Use "help" to see available commands');
    }
  } catch (error) {
    handleError(`Error processing command: ${input}`, error);
  }
}

/**
 * Set up user interface
 */
function setupUserInterface() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Darkvenom> '
  });
  
  rl.prompt();
  
  rl.on('line', async (line) => {
    await processCommand(line.trim());
    rl.prompt();
  });
  
  rl.on('close', async () => {
    await shutdownBot();
  });
  
  // Handle SIGINT (Ctrl+C)
  process.on('SIGINT', async () => {
    logger.info('\nReceived SIGINT signal');
    await shutdownBot();
  });
}

// Main execution
(async () => {
  try {
    const initialized = await initializeBot();
    if (initialized) {
      setupUserInterface();
    } else {
      logger.error('Bot failed to initialize. Exiting...');
      process.exit(1);
    }
  } catch (error) {
    handleError('Fatal error in main execution', error);
    process.exit(1);
  }
})();
