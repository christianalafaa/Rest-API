const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        trim: true
    }
}, { timestamps: true })


module.exports = mongoose.model('User', userSchema)