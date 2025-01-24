import argon2 from 'argon2'
import jwt from "jsonwebtoken"
import db from "../config/db.js"

export const Login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        if(user.length === 0){
            return res.status(404).json({message : "User not found"})
        }

        const isValid = await argon2.verify(user[0].password, password);
        if(!isValid){ 
            return res.status(401).json({message: "invalid email or password"})
        }

        const token = jwt.sign({id: user[0].id,email: user[0].email },"SECRETKEY",{
            expiresIn : '1h'
        })

        res.status(200).json({message: token})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const Register = async(req, res) => {
    try {
        const {username, email, password} = req.body;

        const hashedPassword = await argon2.hash(password);

        const result = await db.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        )

        res.status(201).json({msg: "User Registered", userId : result.userId})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}