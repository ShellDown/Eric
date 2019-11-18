
    const Discord = require("discord.js");
    const client = new Discord.Client();
    
    var prefix = "/";
    
    client.login("NjQwNjMxMTY4ODU3MDE0Mjg1.XcL8wA.dkneEvN35QgbeAC5VgOPxOtPZxg");
    client.on("ready", () => {
        console.log("Prêt à travailler sur le serveur de ShellDown!");
        client.channels.get("640575717528305664").send("```Je suis connecté est prêt à travailler !```"); //Bien mettre l'id du channel pour annoncer que le bot et connecté
        
        

        
        client.user.setActivity("By ShellDown", {
            type: "STREAMING",
            url: "https://lol.com"
          });
     



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
       message.channel.send('**' + member.user.username + '** a kick :white_check_mark:')
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
    
    })
