# hockey-groupme-bot
GroupMe bot built with NodeJS that sends a daily message if there is a St. Louis Blues game today

## Getting started: ##
* After creating a GroupMe account, go to https://dev.groupme.com/session/new
* Click 'Create Bot'
* Select the Group it will 'live' in, and give it a name. (Feel free to add a photo for the bot's avatar. A callback URL isn't necessary for this bot, so leave that input field blank).
* Replace the bot_id on line 15 of **main.js** with your bot's unique ID

## Changing Teams: ##
* The program reads comma seperated values from **Schedule.csv**
  
  Since I am a St. Louis Blues fan, this file currently only has St. Louis Blues games
* I have included **2016_2017_NHL_Schedule.csv** which contains every NHL game this season
* From the command line:
    
    `rm Schedule.csv`
    
    `grep 'Your Team Name Here' 2016_2017_NHL_Schedule.csv >> Schedule.csv`
* This removes the old schedule file, and creates a new schedule file
* **IMPORTANT! :** 
  The final step is to open your new **Schedule.csv** file in your favorite text editor,
  Insert this in a new line at the very top: 
    
    `DATE,TIME,AWAY,HOME`
* Your **Schedule.csv** file with your favorite hockey team is now compatible with the JavaScript

## Running the program: ##

* My program is running through crontab on my raspberry pi. It runs the program every day at 9:15AM. 
  For info on how to set up crontab, follow this link: https://www.raspberrypi.org/documentation/linux/usage/cron.md

Customization:
* You may need to change the TIME column of **Schedule.csv** (specifically the hour) depending on your time zone
* The message sent to the group can say whatever you want it to.
* node-emoji isn't necessary, I just added it for flair

  https://www.npmjs.com/package/node-emoji

### Message to users: ###
Thanks for taking the time to look at my code. I am a beginner to NodeJS and appreciate any input on how I could improve my program. 
