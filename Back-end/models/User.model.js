const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    phonenumber:{
        type: String,
    },
    token: {
        type: String,
    }
  
});
const User = mongoose.model('user',UserSchema);
module.exports = User;