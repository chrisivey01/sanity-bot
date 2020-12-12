const Discord = require('discord.js')

exports.run = async(client, message, args) => {

    const permCheck = message.member.roles.cache.some(r =>["Moderator", "Admin"].includes(r.name))

    if(!permCheck)
        return message.reply('You do not have enough permissions.')
        message.delete().catch((O_o) => {});
        const releaseInfo = message.content.split(" ");
        releaseInfo.shift();
        const text = releaseInfo.join(" ");

        const clientId = message.guild.members.cache.find(
            (m) => m.user.username === "Sanity Bot"
        );
    message.channel.send(text)

    const collector = new Discord.MessageCollector(
        message.channel,
        (m) => m.author.username !== "Sanity Bot"
    );

    collector.on("collect", async(message) => {

        if (message.content === "?done")
        {
            message.channel.send("Release successfully completed!");
            collector.stop();
        } else {
            clientId.lastMessage.delete().catch((O_o) => {});
            await message.channel.send(text);
        }
    })
};