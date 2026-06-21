import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET; // Pour sécuriser le token, on utilise une variable d'environnement pour stocker la clé secrète. Assurez-vous de définir cette variable dans votre environnement de développement ou de production.

interface AuthRequest extends Request {
    user?:any;
}

const authMiddleware = (req : AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, SECRET as string);
        req.user = decoded; //Données du token
        next();
    }
    catch(error){
        return res.status(403).json({message: "Forbidden"});
    }
}
export default authMiddleware;