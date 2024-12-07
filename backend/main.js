const express = require('express');
const database = require('./database/config.js');
const welcome = require('./route/userRoutes.js')
const signup = require('./route/userRoutes.js')

const server = express();
const port = 3030;


database()
server.use(express.json);

server.use('/api/v1/signIn',welcome)
server.use('/api/v1/signup',signup)



server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})