
const Discord = require("discord.js")
const simplydjs = require('simply-djs')
exports.run = async (client, message, args) => {

    simplydjs.ticketSystem(message, message.channel, {
        embedDesc: 'Ticket oluşturmak için aşağıdaki butona tıklayın.', 
       embedColor: '#075FFFFF',
       embedFoot: 'message.guild.name',
       emoji: '🎫', 
       color: 'green', 
   })

} 
exports.conf = {
aliases: [] 
}
exports.help = {
name: "ticket-oluştur" 
} 
