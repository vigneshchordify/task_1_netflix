const mongoose=require('mongoose')

const User=mongoose.model('User',{

    Name:String,
    Email:String,
    Password:String,
    Role:String


})

module.exports=User
