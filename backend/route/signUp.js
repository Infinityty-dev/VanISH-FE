

const express = require('express');
const signUp = require('../schema/signUp.js');

const router = express.Router();

router.post('/',async(req,res)=>{
    try {
        const {email,password,phone} = req.body;
        const newUser = await new signUp.create({
        email,
        password,
        phone
    })
    res.status(200).json({
        message:"user created succesfully",
        data:newUser.save()
    })
    } catch (error) {
        res.status(404).json({
            message:"failed to sign up",
            data:error
        })
    }
    
})

module.exports = router;