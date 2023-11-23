const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const Joi = require('joi')
const User = require('../model/user')

const jwtsecret = '32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c'





const registerSchema=Joi.object({
    Name:Joi.string().required(),
    Email:Joi.string().email().required(),
    Password:Joi.string().required(),
    Role:Joi.string().required()
})



const Authentication = async (req, res, next) => {
    const apitoken = req.body.token





    const data = jwt.verify(apitoken, jwtsecret)
    const userData = await User.findById(data.id)
    if (!userData) {
        return res.status(200).json({ message: "User not found" })
    }
    else {

        next()

    }


}

const registerlogic = async (req, res) => {
    const user = new User()
    const { Name, Email, Password, Role } = req.body


    const data = await User.findOne({ Email })
    try {
        if (data) {
            res.status(200).json({
                message: 'The user already exist'
            })
        }
        else {
            bycrypt.hash(Password, 10).then(async (hash) => {

                user.Name = Name
                user.Email = Email
                user.Password = hash
                user.Role = Role
                user.file=req.file.path

                await user.save()
            })



            res.status(200).json({
                message: ' added successfully'
            })
        }
    }
    catch (err) {
        res.status(404).json(err)
    }


}


const loginlogic = async (req, res) => {

    try {

        const { Email, Password } = req.body

        const user = await User.findOne({ Email })

        if (user) {
            bycrypt.compare(Password, user.Password).then((data) => {
                if (data) {
                    const maxAge = 3 * 60 * 60
                    const token = jwt.sign({ id: user._id }, jwtsecret, { expiresIn: maxAge })
                    res.status(200).json({
                        message: "Login Successfull",
                        token: token,
                        user: user
                    })
                } else {
                    res.status(200).json({ message: "Invalid Password" });
                }

            });

        }
        else {
            res.status(200).json({ message: "Invalid User" })
        }




    }
    catch (err) {
        res.send('The catch error is ', err)
    }


}

const updatelogin=async(req,res)=>{
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
}

module.exports = {
    registerlogic,
    loginlogic,
    updatelogin,
    registerSchema,
    Authentication
}