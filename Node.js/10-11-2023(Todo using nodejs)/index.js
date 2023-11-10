const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")




const app = express()
port = 3000
app.use(bodyparser.urlencoded())

//connection
mongoose.connect("mongodb://127.0.0.1:27017/todo_list").then(() => {
    console.log("database connected");
})


//schema creation for user
const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String


})

// schema creation for todos
const Todo = mongoose.model("Todo", {
    listOfTodos: String,
    userId: String
})


//api requests

//To add user
app.post("/addUser", (req, res) => {
    const userDetails = new User

    userDetails.name = req.body.name,
        userDetails.email = req.body.email,
        userDetails.password = req.body.password

    userDetails.save().then(() => {
        res.send("user details added")
        console.log(userDetails);
    }).catch((err) => {
        console.log(err);
    })


})

//api request to add todo
app.post("/addUser/addTodo", (req, res) => {
    const todoDetails = new Todo

    todoDetails.listOfTodos = req.body.todo,
        todoDetails.userId = req.body.userId

    todoDetails.save().then(() => {
        res.send("todos added")
        console.log(todoDetails);
    }).catch((err) => {
        res.send(err)
    })

})

//Api request to get all todos
app.get("/get_todos", (req, res) => [

    Todo.find().then((todo_list) => {
        res.send(todo_list)
    }).catch((err) => {
        res.send(err)
    })

])

//Api request to individual user todos
app.post("/get_individual_todo", (req, res) => {
    const id = req.body.id
    Todo.find({ userId: id }).then((details) => {
        res.send(details)
    }).catch((err) => {

        res.send(err)
    })
})




app.listen(port, () => {
    console.log("server is running in port:", port);
})