// Get the packages
var Discord = require('discord.js');
var b = new Discord.Client();
var kamojify = require('kamojify');

// Prefix
var pr = "m!"

// Ready the bot
b.on('ready', () =>{
    console.log(`running as ${b.user.tag}`);
    b.user.setActivity(`m!kamojify`);
});

b.login('token');

// ***COMMANDS***
// Kamoji command
b.on('message', m =>{
    var kc = pr + "kamojify";
    if (m.content.toLowerCase() === kc){
        if(m.author.bot) return;
        var str = "";
        var kamstr = kamojify(str);
        m.reply(kamstr);
    }
});
