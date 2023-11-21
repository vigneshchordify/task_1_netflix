const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const jwtSecret = '32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c'




const app = express()
const port = 4000

app.use(bodyparser.urlencoded())

mongoose.connect("mongodb://127.0.0.1:27017/loginauth").then(() => {
    console.log("database Connected");
})

userdetails = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        minlength: 3,
        required: true
    },
    role: {
        type: String,

        required: true
    }
})

const User = mongoose.model("User", userdetails)




app.post('/registerapi', async (req, res) => {
   userdetails = new User()


    try {
        
        const tempHash = await bcrypt.hash(req.body.password, 10)

        userdetails.email = req.body.email,
            userdetails.password = tempHash,
            userdetails.role = req.body.role

        const udetails = await userdetails.save()
        res.status(200).json({
            message: "user successfully registered",
            udetails

        })
    }
    catch (err) {
        res.status(400).json({
            message: err,


        })



    }
})







app.post('/loginapi', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email or password not provided");
    } else {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).send({
                    message:"user not found"
                });
            }

            const auth = await bcrypt.compare(password, user.password);

            if (auth) {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                    { id: user._id, email: user.email, role: user.role },
                    jwtSecret,
                    { expiresIn: maxAge }
                );

                res.status(200).send({
                    message:"login successful",
                    token
                })
            } else {
                res.status(401).send({
                    message:"user credential error"
                });
            }
        } catch (error) {
            
            res.status(500).send({
                message:error
            });
        }
    }
});

const authentication=async(req,res,next)=>{
    const token=req.body.token
    try{
        const decodedToken = jwt.verify(token, jwtSecret);
        const userData = await User.findById(decodedToken.id)
        if (!userData) {
            res.status(404).json({ message: "User not found" });
          } else {
            res.status(200).json({ message: "Verification successful", user: userData });
            next()
          }
          
    }
    catch (error) {
        res.status(401).json({ message: "Token is invalid or expired" });
      }

}

app.post("verify",authentication,(req,res)=>{
    
})










app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})


















































// app.post('/loginapi', async (req, res) => {
    //     const { email, password } = req.body
    
    //     if (!email || !password) {
    //         return res.send("user or password not found")
    //     }
    //     else {
    //         try {
    
    //             const user = await User.findOne({ email })
    //             if (!user) {
    //                 res.send("user not found")
    //             }
    //             else {
    
    //                 bcrypt.compare(password, user.password).then((auth) => {
    //                     auth ? res.status(200).send("Login success") : res.status(400).send("login not success")
    
    //                 })
    //             }
    
    //         }
    //         catch (err) {
    //             res.send(err)
    
    //         }
    //     }                                
    
    // })