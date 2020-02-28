const Discord = require('discord.js');
const bot = new Discord.Client();
const gifSearch = require("gif-search");
const prefix = ("$");
const start = Date.now();

const ClientID = "598579759643099137"

bot.on("ready", () => {
    bot.user.setActivity('Ta mère', {type: 3});
    bot.user.setStatus('dnd')
    console.log("Ready");
});

bot.on('message', message => {
  
  if (message.content.startsWith('Cold')) message.channel.send('<@598579759643099137> le meilleur <:HeartPlus:659519648018202634>');
  if (message.content.startsWith('cold')) message.channel.send('<@598579759643099137> le meilleur <:HeartPlus:659519648018202634>');
  
   if (message.content === prefix + "help"){
        if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    let help = new Discord.RichEmbed()
        .setTitle(`COMMANDES SELFBOT COLD `)
        .addField("  -| Clear ! |- ", " 💢 ~ $clear [NOMBRE] : `Supprime les messages`\n" +  "")
        .addField(" -| 8ball ! |- ", "🎱~ $8ball [texte] : `Pose ta question`\n" +  "")
        .addField("  -| Virus ! |-  ", "💥 ~ $virus [Message] : `𝙇𝙖𝙣𝙘𝙚 𝙪𝙣𝙚 𝙛𝙖𝙪𝙨𝙨𝙚 𝙖𝙩𝙩𝙖𝙦𝙪𝙚 𝘿𝘿𝙊𝙎!`\n" + "󠂪") 
        .addField(" -| Say! |-", "🗣️~ $say [texte] : `Répète se que tu a dit`\n" +  "") 
        .addField("  -| Avatar ! |- ", "👤~ $Avatar [Pseudo] : `Affiche l'avatar de la personne voulut`\n" +  "") 
        .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
        .setThumbnail("https://i.imgur.com/b0deTHt.gif")
        .setColor("#000000")
            .setFooter("© SelfBot by 𝘾𝙤𝙡𝙙 ")
        message.channel.send(help).then(message => message.delete(60000)).catch(console.error);
}
   
if (message.content.startsWith('$avatar')) {
        if (message.author.id != `${ClientID}`) return;

        if (!message.mentions.users.size) {
        
        return message.channel.send(`Avatar de ${message.mentions.users.map}, ${message.author.displayAvatarURL}`);
        
        }
        
        const avatarList = message.mentions.users.map(user => {
            const getav_embed = new Discord.RichEmbed()
            .setAuthor("𝘾𝙤𝙡𝙙" )
            .setFooter("©𝘾𝙤𝙡𝙙")
            .addField("Voici l'avatar de la personne.")
            .setImage(`${user.displayAvatarURL}`)
            .setThumbnail("https://i.imgur.com/KyJsxMi.gif")
            .setColor('#09000')
            message.channel.sendEmbed(getav_embed);
        
        return;
        
        });
        
        message.channel.send(avatarList);
        }
  if(message.content.startsWith("$clear")) {
   if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
 let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args[0]) || 999;
    var deletedMessages = -1;
    message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;
          
        }).catch(console.error);
       }
    if (message.content.startsWith("$say")) {
    if (message.author.id != `${ClientID}`)  ;

        if (message.deletable) message.delete();
    var question = message.content.split(" ").join(" ").slice(4)

    let say_embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(question + "")
      .setThumbnail(bot.user.iconURL)
      message.channel.send(say_embed);
   } 
    if (message.content.startsWith(prefix + "virus")){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`)  ;
    let args = message.content.split(' ').slice(1);
    let virusname = args.join(' ');
    if (virusname < 1) {
       message.channel.send("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐭𝐭𝐫𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐡𝐚𝐜𝐤");
    }
    message.channel.send({ embed: new Discord.RichEmbed().setTitle('𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ' + virusname + "...").setColor('#010101') }).then(function (m) {
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%').setColor('#010101') })
      }, 1000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 𝟐𝟓%').setColor('#010101') })
      }, 2000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 𝟓𝟎%').setColor('#010101') })
      }, 3000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋??𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%').setColor('#010101') })
      }, 4000)
      setTimeout(function () {
        m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%').setColor('#010101') })
      }, 5000)
      setTimeout(function () {
      m.edit({ embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́').setColor('#010101') })
      }, 6000)
      setTimeout(function () {
        m.delete();
      }, 10000)
    }); 
    }
  if (message.content.startsWith(prefix + "8ball")){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`)  ;     
  var question = message.content.split(" ").join(" ").slice(7)
        var tableauball = ["Oui","Non","Peut être", "Je ne sais pas", "Sûrement", "C'est impensable","C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "Je plussoie", "Je moinsoie", "Ta gueule non ?"]
    
        let ball_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Question de "+message.author.tag+"")
        .setDescription(""+question+"")
        .addField("Réponse",""+ tableauball[Math.floor(Math.random()*8)] +"")
        .setThumbnail(bot.user.iconURL)
        return message.channel.send(ball_embed).catch(e => {});

        }
  }); 



bot.login(process.env.TOKEN);
