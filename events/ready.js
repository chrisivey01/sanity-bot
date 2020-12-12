module.exports = async(client) => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`)

    client.channels.cache.get('757016746665312276').send(`**Sanity** has been started! Watching : **${client.users.cache.size} users**`)

    client.user.setPresence({
        activity : {
            name: `PMA-RP`,
            type: `WATCHING`
        },
        status: `idle`
    })
};