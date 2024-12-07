const mongoose = require('mongoose');

const signInSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const signIn = mongoose.model('signIn',signInSchema);

module.exports = signIn