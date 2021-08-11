
const simplydjs = require('simply-djs')

client.on('clickButton', async(button) => { 
simplydjs.clickBtn(button, {
    embedDesc: '<@${button.clicker.id}> Ticket açtı \nTicket kapatmak için aşağıdaki butona tıklayın.',
    embedColor: '#075FFF', 
    closeColor: 'red',
    closeEmoji: '🔒', 
    delColor: 'grey', 
    delEmoji: '❌',
    openColor: 'green' ,
    openEmoji: '🔓',
    timeout: true, 
    cooldownMsg: 'message',
    categoryID: 'kategori id',
    role: 'rol id'
    })
})

client.on('clickButton', async(button) => { 
simplydjs.clickBtn(button)
})
