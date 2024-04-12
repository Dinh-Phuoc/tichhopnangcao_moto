const mongoose = require('mongoose')
async function conn() {
    try {
        await mongoose.connect('mongodb://localhost/Motos')
        console.log('Connected to Motos database')
    } catch (error) {
        console.log('Error connecting to Motos database')
    }
}

module.exports = { conn }