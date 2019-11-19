'use strict';
const Discord = require("discord.js");//on appele le fichier discord.js pour que le bot fonctionne
const client = new Discord.Client();
const token = "NjQwNjMxMTY4ODU3MDE0Mjg1.XdQcLw.IzTaHcxQ1M5MmjJdwyqtxukRIh8";//token de votre bot
var prefix = "/";//votre prefix choisir se que vous voulez cela appelra vos commandes
var mention = "<@550752692667154443>";// votre ID d'utilisateur exemple: <@3486030655265>
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot

//initialisation du bot pour voir les log
client.on("ready", () => {
    //permet de savoir les nom des serveur se trouve le bot
    var servers = client.guilds.array().map(g => g.name).join(',');
    var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
    var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
    var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
    console.log("--------------------------------------");
    console.log('[!]Connexion en cours.......... \n[!]Veuillez Patienté !!! \n[!]Tous les évenement sont après !!!   \n[!]Les préfix actuelle:  ' + prefix + '\n[!]Mentions de votre ID actuel = ' + mention + '\n[!]Nombre de membres: ' + memberCount + "\n[!]Nombre de serveurs: " + servercount + "\n[!]Nombre de canaux: " + channel);
    });
    


 
client.on("ready", () => {
    client.user.setActivity("By ShellDown", { type: "PLAY", url: "https://www.twitch.tv/something" })
})

    client.on('message', message => {
    const msgc = message.content;	
    if (msgc === "/star" &&message.guild) { //effectuer son prefix de la commande
    message.delete(0);     
    var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
    var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
    var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
    let m = " ";
    m += 'je suis en compagnie de '+ memberCount +' membres \n';
    m += 'je suis présent dans '+ servercount+' serveurs \n';
    m += 'je suis sur '+ channel+' canaux \n';
    message.author.send(m).catch(console.log)
    message.reply("La commande star vous a été envoyé en privé :100: ")
    }
    
    ////conversé avec son bot/////////////////////////////////
    if(msgc.startsWith(prefix + 'test')){
    //Mon bot 
    message.reply('Test réusie !');
    }
    //Moi
    else if (msgc === ("Bonjour")){
    //Mon bot 
    message.reply('Bonjour a toi');
    }
    //Moi 
    if (msgc === ("Merci")){
    //Mon Bot 	
    message.reply('Mais de rien');
    } 
    //Moi
    if (msgc === ("Sa vas ?")){
    //Mon Bot 	
    message.reply('Oui merci et toi ?'); 
    }  
    ///////////////////////////FIN///////////////////////////
    
    ///////Question aléatoire du bot/////////////////
    if (msgc.startsWith("PTDR")||msgc.startsWith ("MDR")|| msgc.startsWith ("XD")|| msgc.startsWith ("LOL")|| msgc.startsWith ("haha")){
    //Mon Bot 	
    message.reply('Sa te fait rire !!!');
    }
    ////////////FIN//////////////////////////////////
    
    ////////Avec un effet d'embed plus propre///////
    if(msgc === "?") {
    message.channel.send({embed: {
    color: 3447003,
    //Mon Bot 
    description: 'Vous avez beusoin daide ???'   
    }})
    }
    if(msgc === "re") {
    message.channel.send({embed: {
    color: 3447003,
    //Mon Bot 
    description: 'De retour !'   
    }})
    }

    client.on("message", message =>{
        if(!message.guild) return 
        if(message.content === prefix + "Coucou"){
            message.channel.send("Bonjour " + message.author + " !")
        }
        });


        client.on("message", message =>{
            if(!message.guild) return 
            if(message.content === prefix + "coucou"){
                message.channel.send("Bonjour " + message.author + " !")
            }
            });
    
            client.on("guildMemberAdd", user =>{
               let joinEmbed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .setAuthor(user.user.username, user.user.displayAvatarURL)
                .setDescription(":grin: Bienvenue " + user + " sur le serveur " + user.guild.name + " ! :heart:")
                .setFooter("★𝕃𝔼 ℍ𝔸ℂ𝕂★ | Umpus")
                user.guild.channels.get("640554449596710952").send(joinEmbed)
            });
    
    
            client.on("guildMemberRemove", user =>{
                let leaveEmbed = new Discord.RichEmbed()
                 .setColor("#FF0000")
                 .setAuthor(user.user.username, user.user.displayAvatarURL)
                 .setDescription(":cry: Sniff... " + user + ", a quitté le serveur " + user.guild.name + " ! :pleading_face:")
                 .setFooter("★𝕃𝔼 ℍ𝔸ℂ𝕂★ | Umpus")
                 user.guild.channels.get("640554449596710952").send(leaveEmbed)
             });
             

             /*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})
 
 
/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
       
    }
})


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 99) return message.channel.send("Veuillez indiquer un nombre entre 1 et 99")
        message.channel.bulkDelete(count + 1, true)
    }
 
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === '🔇 Mute')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: '🔇 Mute', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
})


client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    //unmute
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === '🔇 Mute')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
    }
 })

 client.on("message", message =>{
    if(!message.guild) return 
    if(message.content === prefix + "clear 99"){
     message.channel.send("Les messages ont étaient supprimé " + message.author + " !")
    }
    });
    
    
    
      

    ////////////////FIN//////////////////////////////
    
});
    bot.login(process.env.BOT_TOKEN)
