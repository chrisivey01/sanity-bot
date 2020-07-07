const Discord = require("discord.js");
const bot = new Discord.Client();
const { prefix, token } = require("./config.json");
const help = require("./helper");
const donor = require("./donor");

bot.login(token);

bot.on("ready", (event) => {
    console.log("Connected");
});

bot.on("message", async (message) => {
    // if (message.author.bot) return;

    // if(message.guild){
    const adminRole = message.guild.roles.find((x) => x.name === "Admin");
    const modRole = message.guild.roles.find((x) => x.name === "Moderator");
    // commands
    // if (!message.content.startsWith(prefix)) return;
    // const args = message.content.slice(prefix.length).split(/ +/);
    // const command = args.shift().toLowerCase();
    if (adminRole || modRole) {
        if (message.content.startsWith("!release")) {
            message.delete().catch((O_o) => {});
            help.releaseInfo(message, adminRole, Discord);
        }

        if (message.content.match("!idea")) {
            message.delete().catch((O_o) => {});
            help.sanity(message);
        }

        if (message.content.startsWith("!info")) {
            message.delete().catch((O_o) => {});
            help.moreInfo(message);
        }

        if (message.content.startsWith("!donor")) {
            donor.donation(Discord, message);
        }
    }
});
