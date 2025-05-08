# Darkvenom Bot v1.1.1

A modular Node.js bot with advanced group management functionality.

## Features

- Modular command system
- Group management features
- Anti-link protection
- Owner-only administrative commands
- Broadcast messaging

## Commands

### Basic Commands
- `help` - Display help information
- `ping` - Check bot responsiveness
- `time` - Show current time in different formats
- `version` - Show bot version information

### Group Commands
- `group info` - Display group information
- `group members` - List group members
- `group rules` - Display group rules
- `group kick @user` - Kick a user from the group
- `group ban @user` - Ban a user from the group
- `group promote @user` - Promote a user to admin
- `group demote @user` - Demote an admin to regular user

### Antilink Commands
- `>antilink on` - Enable antilink protection
- `>antilink off` - Disable antilink protection
- `>antilink status` - Check current antilink settings
- `>antilink kick on` - Enable automatic kicking for link senders
- `>antilink kick off` - Disable automatic kicking
- `>antilink warn on` - Enable warnings before kicking
- `>antilink warn off` - Disable warnings
- `>antilink whitelist add domain.com` - Add domain to whitelist
- `>antilink whitelist remove domain.com` - Remove domain from whitelist
- `>antilink whitelist list` - Show whitelisted domains

### Admin Commands
- `admin status` - Display bot status and metrics
- `admin config` - Display current configuration
- `admin broadcast <message>` - Send a message to all users/groups
- `admin restart` - Restart the bot

## Deployment

### Deploying to Heroku

1. Fork this repository
2. Create a new Heroku app
3. Connect your GitHub repository to the Heroku app
4. Deploy the master branch

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Owner

- **Name:** Darkvenom
- **Contact:** 254114629260

## License

MIT