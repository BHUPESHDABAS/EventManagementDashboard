import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = express.Router();

router.post("/signup", async(req,res) =>{
    try {
        const {name, email, password} = req.body;
        const checkUser = await User.findOne({email});
        if(checkUser) return res.status(400).json({message: "User already exists, try another E-mail"});
        const newUser = new User({name, email, password});
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({ message: "Backend Service error (signup)", error });
    }
});


router.post("/login", async(req,res) =>{
    try {
        const {email, password} = req.body;
        const checkUser = await User.findOne({email});
        if(!checkUser) return res.status(400).json({message: "User not found"});
        if(password != checkUser.password) return res.status(400).json({message: "Incorrect password, try again"});
        const token = jwt.sign({id: checkUser._id}, process.env.JWT_KEY, {expiresIn: "1d"});

        res.status(200).json({token, checkUser, message:"Login Successfull"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Backend Service error (login)", error });
    }
});

export default router;