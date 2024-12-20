const bcrypt = require("bcrypt")




const userSignUp =async (req, res)=>{
    try {
        const { name , email , password }=req.body

        if(!name || !email || !password){
            res.status(400).json({
                message:"PROVIDE YOUR NAME, EMAIL, PASSWORD"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const userHashedPassword = bcrypt.hash(password,  salt);



    } catch (error) {
        res.status(500).json({
            message:"Sign up unsuccessful" || error,
            error:true,
            success:false
        })
    }
}


const userSignIn =async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

const driverSignUp =async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}


const driverSignIn =async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}






















// const express = require('express');
// const signUp = require('../schema/signUp.js');

// const router = express.Router();

// router.post('/',async(req,res)=>{
//     try {
//         const {email,password,phone} = req.body;
//         const newUser = await new signUp.create({
//         email,
//         password,
//         phone
//     })
//     res.status(200).json({
//         message:"user created succesfully",
//         data:newUser.save()
//     })
//     } catch (error) {
//         res.status(404).json({
//             message:"failed to sign up",
//             data:error
//         })
//     }
    
// })

// module.exports = router;