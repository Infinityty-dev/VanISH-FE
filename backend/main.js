const express = require('express');
const database = require('./database/config.js');
const signUp = require('./schema/signUp.js')
// const signUp = require('./route/signUp.js')

const server = express();
const port = 5500;


database()
server.use(express.json());

// server.use('/api/v1/signIn',welcome)
server.post('/api/v1/signup', async(req,res)=>{
  
    try {
        const {email,password,phone} = req.body;
        const newUser = await signUp.create({
        email,
        password,
        phone,
    });
    res.status(200).json({
        message:"user created succesfully",
        data:newUser,
    });
    } catch (error) {
        res.status(404).json({
            message:"failed to sign up",
            data:error.message,
        });
    }
    
});


  



server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})