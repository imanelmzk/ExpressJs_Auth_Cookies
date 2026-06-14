import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = "mysecret";

interface AuthRequest extends Request {
    user?:any;
}

const authMiddleware = (req : AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        return res.status(403).json({message: "Forbidden"});
    }
}
export default authMiddleware;