const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task6').then(console.log("The database is connected")).catch(
    (err) => { console.log('error  ', err); })



