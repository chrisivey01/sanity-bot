module.exports = {
    sanity(message){
        message.channel.send("Chris loves that you're so passionate about the server/city, but please remember he is the only developer of our community currently. He also has a fulltime job " +
        "a wife, and 2 dogs. He is extremely busy and asks for you to please be patient. Us being an overall new server/city, things take time. If you're wanting everything to be perfect " +
        " you probably would do better joining a more established community. We have our issues, we have our struggles, and we're all learning together in the meantime.  ");
    },

    moreInfo(message){
        const problemedUser = message.content.split(" ")[1]
        message.channel.send(problemedUser + " - you have provided us with little to no information about the issue. Please provide some more in order for us to be able to help you out. ")
    },

    releaseInfo(message, adminRole, Discord){
        const releaseInfo = message.content.split(" ");
        releaseInfo.shift();
        const text = releaseInfo.join(" ")

        const botId = message.guild.members.find(m => m.user.username === "Sanity Bot");
        message.channel.send(text + " You will be notified by <#614866266590674954> once the server is up.")

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id);
        collector.on('collect', message => {
            if(message.content === "!done" && adminRole){
                message.channel.send('Release completed.')
                collector.stop()
            }
            botId.lastMessage.delete().catch(O_o=>{}); 
            message.channel.send(text + " You will be notified by <#614866266590674954> once the server is up.")
        })
    }
}