import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export const register = (req : Request, res : Response) =>{
    res.send("Register endpoint, or User registered successfully");
};

export const login = (req:Request, res: Response) =>{
    const {email, password} = req.body;

    const fakeUser = {
        email : "test@test.com",
        password : "123456"
    };

    if(email !== fakeUser.email || password !== fakeUser.password) {
        return res.status(401).json({
            message : "Invalid credentials"
        });
    }

    // Generate JWT token
    const token = jwt.sign(
        {email : fakeUser.email}, // payload
        "mysecret", // secret key
        {expiresIn : "1h"} // options : durrée de validité du token
    )

    return res.json({
        message : "login successful",
        email,
        token
    })
    
}