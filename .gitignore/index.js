const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "Rien.", url: "https://www.twitch.tv/lesingee1", type: 1 } })
    console.log("Ready");
});

bot.login(process.env.TOKEN);
