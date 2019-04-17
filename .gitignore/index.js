const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(`𝓡𝓲𝓮𝓷.`, {
type: "STREAMING",
url: "https://www.twitch.tv/lesingee1"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

bot.login(process.env.TOKEN);
