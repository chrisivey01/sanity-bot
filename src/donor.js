module.exports = {
    donation(Discord, message) {
        message.channel.send({
            embed: new Discord.RichEmbed({
                title: "Donations",
                description:
                    "Each tier donation will come with a higher queue status.",
            })
                .setColor("#007AB7")
                .addField(
                    '\u200B',
                    '\u200B',
                )
                .addField(
                    "$30 Supporter",
                    "[Click here](https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9A466834VJ547012PL4CGYVI)"
                )
                .addField(
                    "$50 Supporter",
                    "[Click here](https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0YF35658EE993853RL4CGZKI)"
                )
                .addField(
                    "$100 Supporter",
                    "[Click here](https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6BS39764PX8183233L4CGZYQ)"
                )
                .addField(
                    "$200 Supporter",
                    "[Click here](https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2A044781UC190362DL4CG2DA)"
                )
                .addField(
                    '\u200B',
                    '\u200B',
                )
                .addField(
                    "What do I do next?",
                    "Please <#624765889417576471> with a screenshot of your donation afterwards, also add your steam name for your account to the ticket so your queue can be adjusted."
                ),
        });
    },
};
