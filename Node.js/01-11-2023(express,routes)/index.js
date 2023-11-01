const express=require("express")
const bodyparser=require("body-parser")

app=express()
port=3000

app.use(bodyparser.urlencoded())

app.listen(port,()=>{
    console.log(`server started in port ${port}`);
})

app.get("/",function(req,res){

    res.send("hello world")
})

app.post("/post-method",function(req,res){
    res.send("this is post method")
})

app.put("/put-method",function(req,res){
    res.send("this is a put method")
})


app.patch("/patch-method",function(req,res){
    res.send("this is patch method")
})


app.post("/data-share",function(req,res){

console.log("body data",req.body);
    res.send(req.body)
})