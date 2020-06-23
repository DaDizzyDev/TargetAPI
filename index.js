/* How To Use
Your probably wondering how you use this? Well. Here is a short documentation.

    Step 1: Token.
        Input your token on the const "token" and replace "EnterTokenHere" with your token.
        You can get your token at discord.com/developers/applications.

    Step 2: Config.
        You can configurate your bot in "config.json" and change it to your liking.

    Step 3: Commands.
        You can go into the commands folder and code your commands. Make sure you use the template.
        I suggest adding folders sorting categories such as moderation, fun, etc etc.

    Have fun and thanks for using the Target API!
*/

//STARTUP//
console.clear();
console.log("[DISCORD CLIENT] The bot is loading...");


//DEFINITIONS//
const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
const handler = require("./handler");
const token = "EnterTokenHere";

let client = handler(__dirname + '/commands', token, { customPrefix: config.prefix, clientOptions: { disableEveryone: true } });


//DISCORD FUNCTIONS//
client.on('ready', () => {
    client.user.setActivity(config.customstatus);
    client.user.setStatus(config.activity);
    //console.clear();
    console.log(`[DISCORD CLIENT] Bot loaded!`);
    console.log(`============================\n`);
});

client.on('error', err => {
    console.error("[ERROR] An error occured, caught an error unexpectedly. Error:\n" + err);
});
