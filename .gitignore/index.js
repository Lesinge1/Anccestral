const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setGame('𝕽𝖎𝖊𝖓')
    bot.user.setStatus('dnd')
    console.log("Ready");
});

bot.login(process.env.TOKEN);
