const Discord = require("discord.js");

var client = new Discord.Client();

client.on("ready", () => {
    client.user.setActivity('Ta mère', {type: 3});
    client.user.setStatus('dnd')
    console.log("Ready");

});

client.on("message", message => {
  if (message.content.startsWith('Cold')) message.channel.send('<@598579759643099137> le meilleur <:HeartPlus:659519648018202634>');
  if (message.content.startsWith('cold')) message.channel.send('<@598579759643099137> le meilleur <:HeartPlus:659519648018202634>');
 
 });





client.login(process.env.TOKEN);
