const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    admin: { type: Boolean, default: false},
},
{ timestamps: true },
);

module.exports = mongoose.model('Account', Account);