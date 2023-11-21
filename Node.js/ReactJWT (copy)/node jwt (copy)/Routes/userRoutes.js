const express =require("express");
const validator = require('express-joi-validation').createValidator({})
const {registerSchema,Authentication, registerlogic,loginlogic ,updatelogin}=require('../Controllers/Usercontroller')







const router=express.Router();



router.post('/register',validator.body(registerSchema),registerlogic)


router.post('/login', loginlogic)



router.post('/update',Authentication,updatelogin)


module.exports=router