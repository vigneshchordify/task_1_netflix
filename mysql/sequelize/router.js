const express=require('express')
const Task=require('./models')


const router=express.Router()


router.get('/todos',async(req,res)=>{
    
   const tasks= await Task.findAll()

    res.status(200).json(tasks)

})
router.post('/todos',async(req,res)=>{

   const {content,description}=await req.body;

   const newTask=Task.build({
    'content':content,
    'description':description
   })

   await newTask.save()
    res.status(201).json(newTask) 
    
})
router.get('/todos/:id',(req,res)=>{
    
})
router.get('/todos/:id',(req,res)=>{
    
})
router.get('/todos/:id',(req,res)=>{
    
})


module.exports=router