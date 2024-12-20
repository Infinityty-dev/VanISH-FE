const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({

    Id :{
        type:String,
        required:true,
     },

    emailorphone:{
        type:String,
        required:true,
        // unique:true
    },
    password:{
        type:String,
        required:true
    },
   
    Name :{
        type:String,
        required:true,
    },

    TandC :{
        type:boolean,
        default: false,
        required: true,

    },

    ServiceOption: {
        required: true,
    },

    VehicleChoice: {
        required: true,
    },

    PickUpLocation: {
        type: String,
        required: true,
    },

    DropOffLocation: {
        type: String,
        required: true,
    },

    UserComlaint:{
        type: Number,

    },

    CompletedDelivery:{
        type: Number,
    }
})

const signUp = mongoose.model('signUp',signUpSchema);

module.exports = signUp