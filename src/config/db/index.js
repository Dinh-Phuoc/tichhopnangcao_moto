const mongoose = require('mongoose')
async function conn() {
    try {
        await mongoose.connect('mongodb+srv://phandinhphuoc02:dadZprcUWLzCWqiZ@cluster0.u4fxy74.mongodb.net/Moto?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Connected to Motos database')
    } catch (error) {
        console.log('Error connecting to Motos database')
    }
}

module.exports = { conn }
