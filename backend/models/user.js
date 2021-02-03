const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,   
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    account_type:{
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;