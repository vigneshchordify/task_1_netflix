const express =require("express");
const validator = require('express-joi-validation').createValidator({})
const {registerSchema,Authentication, registerlogic,loginlogic ,updatelogin}=require('../Controllers/Usercontroller')
const multer=require('multer')







const router=express.Router();

const storage=multer.diskStorage({
    destination:'uploads/',filename:function(req,file,cb){
        cb(null,file.originalname)

    }
})

const upload=multer({storage:storage})

router.post('/register',upload.single("image"),validator.body(registerSchema),registerlogic)


router.post('/login', loginlogic)



router.post('/update',Authentication,updatelogin)


module.exports=router