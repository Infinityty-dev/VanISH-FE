const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    }
})

const signUp = mongoose.model('signUp',signUpSchema);

module.exports = signUp