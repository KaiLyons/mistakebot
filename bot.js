// Get the packages
var Discord = require('discord.js');
var b = new Discord.Client();
var loremip = require('loremip');
var kamojify = require('kamojify');
var hewwwo = require('hewwwo');

// Prefix
var pr = "m!"

// Ready the bot
b.on('ready', () =>{
    console.log(`running as ${b.user.tag}`)
});

b.login('token');

// ***COMMANDS***
// Kamoji command
b.on('message', m =>{
    if (m.content === pr, "kamojify", str){
        var args = args = m.content.slice(pr).trim().split(/ +/g);
        var str = args.slice(0,2).join(' ').replace(/"/g,'');
        var kamstr = kamojify(str);
        m.reply(kamstr);
    }
});

// Hewwwo command
b.on('message', m =>{
    if (m.content === pr, "hewwwo", array){
        var args = args = m.content.slice(pr).trim().split(/ +/g);
        var array = args.shift().toLowerCase();
        var hw = hewwwo(array);
        m.reply(hw);
    }
});

// Loremip command
b.on('message', m =>{
    if (m.content === pr, "loremip", lmip, count){
        var args = args = m.content.slice(pr).trim().split(/ +/g);
        var lmip = args.shift().toLowerCase();
        var count = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", ]
        var lmo = loremip.generate(lmip, count);
        m.reply(lmo);
    }
});
