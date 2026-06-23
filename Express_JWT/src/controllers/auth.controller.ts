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
        process.env.JWT_SECRET as string, // secret key
        {expiresIn : "1h"} // options : durrée de validité du token
    )

    /*return res.json({
        message : "login successful",
        email,
        token
    })*/
   return res.cookie("token", token, {
        httpOnly : true, // set to true in production with HTTPS
        secure : process.env.NODE_ENV === "production",// Seulement HTTPS
        sameSite : "strict", // Empeche attaques CSRF (Protection CSRF)
        maxAge : 3600000 // 1 hour == Durée de vie  
        
   })
    .json({
        message : "login successful",
        email,
        token
    });
    
}
export const profile = (req : Request, res : Response) =>{
    // @ts-ignore
    const user = req.user;

    res.json({
        message : " Access ",
        user
    });
}