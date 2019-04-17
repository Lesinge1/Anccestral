const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setGame('𝓡𝓲𝓮𝓷', 'https://twitch.tv/lesingee1');
    bot.user.setStatus('dnd')
    console.log("Ready");
});

bot.login(process.env.TOKEN);
