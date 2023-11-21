const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const jwtSecret = '32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/loginauth").then(() => {
    console.log("Database Connected");
});

const userdetails = new mongoose.Schema({
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
});

const User = mongoose.model("User", userdetails);

app.post('/registerapi', async (req, res) => {
    const newuser = new User();

    try {
        const tempHash = await bcrypt.hash(req.body.password, 10);

        newuser.email = req.body.email;
        newuser.password = tempHash;
        newuser.role = req.body.role;

        const udetails = await newuser.save();
        res.status(200).json({
            message: "User successfully registered",
            udetails
        });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

app.post('/loginapi', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email or password not provided");
    } else {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).send({
                    message: "User not found"
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
                    message: "Login successful",
                    token
                });
            } else {
                res.status(401).send({
                    message: "User credential error"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
});

const authentication = async (req, res, next) => {
    const token = req.body.token;
    try {
        const decodedToken = jwt.verify(token, jwtSecret);
        const userData = await User.findById(decodedToken.id);
        if (!userData) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json({ message: "Verification successful", user: userData });
            next();
        }
    } catch (error) {
        res.status(401).json({ message: "Token is invalid or expired" });
    }
};

app.post("/verify", authentication, async (req, res) => {

    const useremail=req.body.email
    const data=await User.findOne({email:useremail})
    if(!data){
        res.status(404).send({
            message:"user not found"
            
        })
    }
    else{


    }

   
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
