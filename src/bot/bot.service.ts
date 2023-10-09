import { Component, OnModuleInit } from '@nestjs/common';

@Component()
export class BotService implements OnModuleInit {

    onModuleInit() {
        this.botMessage();
    }

    botMessage() {        
        process.env.NTBA_FIX_319 = "1";
        const TelegramBot = require('node-telegram-bot-api');//('6422583402:AAHQTMx6vNoJk3Gvb-e1JaqioN06_awF-GU');
        
        //6422583402:AAHQTMx6vNoJk3Gvb-e1JaqioN06_awF-GU
        const token = '6422583402:AAHQTMx6vNoJk3Gvb-e1JaqioN06_awF-GU';
        
        const bot = new TelegramBot(token, { polling: true });
        
        //tg.router.when(['/start'],'StartController')

        bot.on('message', (msg) => {
            
            console.log('Received message:', msg.text);


            let Hello = "hello";
            if (msg.text.toString().toLowerCase().indexOf(Hello) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
            }
            
            //let response = "Who are you";
            if (msg.text.toString().toLowerCase().includes("why")) {
                bot.sendMessage(msg.chat.id, "I am simple telegram Nest.js bot as a hiring assignment for hospals");
            }
            
            //let response2 = "Why";
            if (msg.text.toString().toLowerCase().includes("who")) {
                bot.sendMessage(msg.from.id, "Healthtrip enables users to find and avail the best medical treatment across India, Thailand, Singapore, Malaysia, UAE and Turkey");
            }
        });
        
    }
}