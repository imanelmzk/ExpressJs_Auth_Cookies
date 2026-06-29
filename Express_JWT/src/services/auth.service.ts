import { userInfo } from "node:os";
import {PrismaClient} from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
export const createUser = async (email: string, password: string)=>{
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before storing it
    return await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });
}

export const findUserByEmail = async( email : string) =>{
    const user = await prisma.user.findUnique({
        where : {
            email
        }
    });
    /*
    if (!user) {
        throw new Error("User not found");
    }
    const hashedComparePassword = await bcrypt.compare(password, user.password); // Compare the provided password with the hashed password in the database
    if (!hashedComparePassword) {
        throw new Error("Invalid password");
    }*/
    return user;
}


export const authenticateUser = async (email: string, password: string) => {
    const user = await findUserByEmail(email);
    if(!user){
        return null;
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
        throw new Error("Invalid password");
    }
    return user;
}

