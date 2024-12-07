
//creating the database
const mongoose = require('mongoose');

const db_url = 'mongodb+srv://vanish:vanish@vanish-backend.c9ljd.mongodb.net/?retryWrites=true&w=majority&appName=vanish-backend';


const database = (url)=>{

    mongoose.connect(db_url)
    .then(()=>{
        console.log('The database is currently live!')
    })
    .catch((err)=>{
            console.log('The database didnt connect,please check the connection conditions.',err)
    })
            
    }
    


module.exports = database
