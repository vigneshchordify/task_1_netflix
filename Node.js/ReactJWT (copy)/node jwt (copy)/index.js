const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors')







const app = express()
const port = 9000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/task6').then(console.log("The database is connected")).catch(
    (err) => { console.log('error  ', err); })




app.use('/',require('./Routes/userRoutes'))



app.listen(port, () => {
    console.log('server started in port:', port);
})



