const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setPresence({ game: { name: "Rien.", url: "https://www.twitch.tv/lesingee1", type: 1 } })
    bot.user.setStatus("dnd");
    console.log("Ready");
});

bot.login(process.env.TOKEN)
