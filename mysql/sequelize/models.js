const {sequelize}=require('./db')

const Datatypes=require('sequelize')

const Task=sequelize.define('task',{
    content:{
        type:Datatypes.STRING,
        
        validate:{
            max:150
        }
    },
    description:{
        type:Datatypes.TEXT
    },
    is_complete:{
        type:Datatypes.BOOLEAN,
        defaultValue:false
    }

})

// sequelize.sync()

module.exports=Task