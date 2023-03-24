import User from "../models/User.js";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async(req, res) => {
    try {

        // hashing password 
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)


        const newUser = new User ({
            username : req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()

        res.status(200).json({message :"success register"})
    } catch (err) {
        res.status(500).json({message  :"Filed to register, Try again"})
        
    }
}


export const login = async(req, res) => {

const email = req.body.email

    try {
        const user = await User.findOne({email})


        // if user doesn,t exit 
        if(!user){
            return  res.status(404).json({message :"users not found"})
        }

    //    if use exits then check password of compare the password 
    const checkCurrentPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCurrentPassword){
            return  res.status(401).json({message :"incorrect password"})
        }
   
        // cerate jwt token 
        const token  =  jwt.sign(
            {
            id:user._id, role:user.role},
            process.env.JWT_SECRET_KEY, 
            // experied time
            {expiresIn : "15d"}
            );

            // set token in the browser cookies and send the response to the client
            res.cookie('accessToken', token, {
                httpOnly: true,
                expires:token.expiresIn
            }).status(200).json({token, data:{...rest}, role} )

    } catch (err) {
        res.status(500).json({message  :"Filed to login, Try again"})
        
    }
}