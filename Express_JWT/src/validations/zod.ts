import {z} from "zod";
/*
export const createUserSchema = z.object({
    //name : z.string().min(3, "le nom doit avoir au moins de 3 caractères"),
    email : z
        .string()
        .email("l'adresse email n'est pas valide"),
    //age : z.number().int().positive("l'âge doit être un nombre entier positif").optional()
    password : z
        .string()
        .min(6, "le mot de passe doit avoir au moins 6 caractères")
})
    */

export const registerSchema = z.object({
    email: z
        .string()
        .email("l'adresse email n'est pas valide"),
    password: z
        .string()
        .min(6, "le mot de passe doit avoir au moins 6 caractères")
})

export const loginSchema = z.object({
    email: z
        .string()
        .email("l'adresse email n'est pas valide"),
    password: z
        .string()
        .min(6, "le mot de passe doit avoir au moins 6 caractères")
})