import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import { createUser, authenticateUser } from '../services/auth.service';
export const register = async (req : Request, res : Response) =>{
    const {email, password} = req.body;

    try {
        const user = await createUser(email, password);
        res.status(201).json({
            message : "User registered successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            message : "Error registering user"
        });
    }
};

export const login = async(req:Request, res: Response) =>{
    const {email, password} = req.body;

    const user = await authenticateUser(email, password);
    /*const fakeUser = {
        email : "test@test.com",
        password : "123456"
    };*/

    
    if(!user){ {
        return res.status(401).json({
            message : "Invalid credentials"
        });
    }
}

    // Generate JWT token
    const token = jwt.sign(
        {email : user.email}, // payload
        process.env.JWT_SECRET as string, // secret key
        {expiresIn : "1h"} // options : durrée de validité du token
    )

    /*return res.json({
        message : "login successful",
        email,
        token
    })*/
   
   return res
        .cookie("token", token, {
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