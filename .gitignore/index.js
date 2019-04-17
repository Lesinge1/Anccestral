const Discord = require("discord.js");

const PREFIX = ";";

var bot = new Discord.Client();

var fortunes = [
   "Oui",
   "Non",
   "Peut être",
   "Je pense que oui",
   "Je pense que non",
   "Je ne sais pas"
];


var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setPresence({ game: { name: "𝕽𝖎𝖊𝖓", url: "https://www.twitch.tv/lesingee1", type: 1 } })
    bot.user.setStatus("online");
    console.log("Ready");
});

bot.on("message", function(message) {
    
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage("Toutes les informations sont disponibles dans un salon dédié.");
            break;
        case "ping":
            message.channel.sendMessage(':ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
            break;
        case "8ball":
            if (args [1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Je ne peux pas lire ton message");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("Fun", "`8ball` - Réponses aléatoires")
                .addField("Autres", "`info` - Avoir des informations \n `ping` - Votre ping entre vous et le serveur ")
                .addField("Liens", "[Chaîne de Momo](https://www.youtube.com/channel/UCPM0ideFVNEDArbwSpGe6Ew) \n [Chaîne de Shimpy](https://www.youtube.com/channel/UCcz7JCXFEmFPF-nfZDT6CIg?view_as=subscriber) \n [Lien du serveur discord](https://discord.gg/SqNjrYj)")
                .setAuthor("World Of Cartoon", "https://cdn.discordapp.com/attachments/461888039405486090/558985612640911363/dddd.png")
                .setColor("#7289d9")
                .setFooter("Crée par Shimpy#0001")
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Bonjour") {
        message.channel.sendMessage("Hey, comment ça va ?");
    }

    if (message.content == "bonjour") {
        message.channel.sendMessage("Hey, comment ça va ?");    
    }
    
    if (message.content == "Coucou") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "coucou") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "très bien et toi ?") {
        message.channel.sendMessage("Je vais très bien aussi."); 
    }

    if (message.content == "Très bien et toi ?") {
        message.channel.sendMessage("Je vais très bien aussi."); 
    }

    if (message.content == "salut") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "Salut") {
        message.channel.sendMessage("Hey, comment vas-tu ?");
    }


    if(message.content.includes('fdp') || message.content.includes('ntm') || message.content.includes('fils de pute') || message.content.includes('nique ta mère')){
        if(message.channel.name = "general") {
            message.delete();
            message.author.send("Désolé, mais les **insultes** ne sont pas autorisé sur le serveur !");
        }else{
            //ignore
        }


    }
});

bot.login(process.env.TOKEN);
