# Deploying to Heroku

This guide will help you deploy your Darkvenom Bot to Heroku.

## Prerequisites

- A [Heroku account](https://signup.heroku.com/) (free tier is fine to start)
- [Git](https://git-scm.com/downloads) installed on your computer
- Basic knowledge of terminal/command prompt

## Step-by-Step Deployment

### Method 1: Direct Deployment

1. Click the "Deploy to Heroku" button in the README.md file
2. Fill in the required environment variables
3. Click "Deploy App"
4. Wait for the build to complete
5. Once deployed, go to the Resources tab and make sure the worker dyno is enabled

### Method 2: Manual Deployment

1. **Create a Heroku account**
   - Sign up at [heroku.com](https://signup.heroku.com/) if you haven't already

2. **Install the Heroku CLI**
   - Download and install from [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

3. **Log in to Heroku via CLI**
   ```
   heroku login
   ```

4. **Clone the repository (if you haven't already)**
   ```
   git clone https://github.com/princepaka885/darkvenom-bot.git
   cd darkvenom-bot
   ```

5. **Create a Heroku app**
   ```
   heroku create your-app-name
   ```

6. **Add a buildpack**
   ```
   heroku buildpacks:set heroku/nodejs
   ```

7. **Push to Heroku**
   ```
   git push heroku main
   ```

8. **Scale the worker dyno**
   ```
   heroku ps:scale worker=1
   ```

9. **Check the logs**
   ```
   heroku logs --tail
   ```

## Environment Variables

You can set these in the Heroku dashboard under your app's settings, or using the Heroku CLI:

```
heroku config:set LOG_LEVEL=info
heroku config:set BOT_PREFIX=!
```

## Common Issues

### Bot crashes immediately
- Check the logs using `heroku logs --tail`
- Make sure all dependencies are properly listed in package.json
- Verify that the Procfile is correctly set up as `worker: node index.js`

### Bot starts but doesn't respond
- Check the logs for any error messages
- Verify your environment variables are set correctly

### Need to restart the bot
```
heroku restart
```

## Additional Resources

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku CLI Commands](https://devcenter.heroku.com/articles/heroku-cli-commands)
- [Heroku Logging](https://devcenter.heroku.com/articles/logging)

## Contact

If you encounter any issues with deployment, please contact the bot owner:
- Name: Darkvenom
- Contact: 254114629260