const Express=require("express")
const apiroutes=require('./router')
const body_parser=require('body-parser')

const {sequelize,connectToDb}=require('./db')
const bodyParser = require("body-parser")


const app=Express()
app.use(

   Express.json()
)

const PORT=4000



app.use('/api',apiroutes)



app.listen(PORT,async ()=>{
    console.log("server is running in "+PORT);
    await connectToDb()
})