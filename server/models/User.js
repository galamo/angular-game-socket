const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    test1: {
        type: String,
        required: false
    }
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel;




