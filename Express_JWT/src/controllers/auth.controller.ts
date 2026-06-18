import {Request, Response} from 'express';

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

    return res.json({
        message : "login successful",
        email,
        password
    })
}