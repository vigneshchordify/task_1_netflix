const {Sequelize}=require('sequelize')

const sequelize=new Sequelize(
    'expressjsconnection',
    'root',
    '',{
        dialect:'mysql',
        host:'localhost'
    }
)

const connectToDb=async()=>{
    try{
        await sequelize.authenticate();
        console.log("successfull connected to db");
    }
    catch(err){
        console.log(err);
    }
}

module.exports={sequelize,connectToDb}