const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cors=require('cors')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const jwtsecret='32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c'


const app=express()
const port=4000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/task6').then(console.log("The database is connected")).catch(
    (err)=>{ console.log('error  ',err); })



const registerSchema=Joi.object({
    Name:Joi.string().required(),
    Email:Joi.string().email().required(),
    Password:Joi.string().required(),
    Role:Joi.string().required()
})

const User=mongoose.model('User',{

    Name:String,
    Email:String,
    Password:String,
    Role:String


})


const Authentication=async(req,res,next)=>{
    const apitoken=req.body.token


   


    const data=await jwt.verify(apitoken,jwtsecret)
    const userData=await User.findById(data.id)
    if(!userData){
        return res.status(200).json({message:"User not found"})
    }
    else{

        next()

    }
  

}


app.post('/register',validator.body(registerSchema),async (req,res)=>{
const user=new User()
const{Name,Email,Password,Role}=req.body

 
   const data= await User.findOne({Email})
 try{
    if(data){
        res.status(200).json({
            message:'The user already exist'})
    }
    else{
        bycrypt.hash(Password,10).then(async(hash)=>{
           
            user.Name=Name
            user.Email=Email
            user.Password=hash
            user.Role=Role

            await user.save()
        })
        

        
        res.status(200).json({
            message:' added successfully'
        })
    }
}
catch(err){
    res.status(404).json(err)
}


})


app.post('/login', async(req,res)=>{

    try{
       
        const{Email,Password} =req.body

        const user= await User.findOne({Email})
       
        if(user){
           bycrypt.compare(Password, user.Password).then((data)=>{
            if(data){
                const maxAge=3*60*60
                const token=jwt.sign({id:user._id},jwtsecret,{expiresIn:maxAge})  
                  res.status(200).json({
                   message:"Login Successfull",
                   token: token,
                   user:user
                  })
            }else {
                res.status(200).json({ message: "Invalid Password" });
            }
   
           });
        
        }
        else{
            res.status(200).json({message:"Invalid User"})
        }
     
    


    }
   catch(err){
     res.send('The catch error is ',err)
   }


})



app.post('/update',Authentication,async(req,res)=>{
    try{
        const {Name,id}=req.body
        
       const user =await User.findById(id)
       if(user){
          user.Name=Name
          await user.save()
          res.status(200).json({
            message:"Updated Successful",
            user:user
          })
       }

    }
    catch(err){
        res.status(400).json(err)
    }
})


app.listen(port,()=>{
    console.log('server started in port:',port);
})



