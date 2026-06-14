import express from 'express';

const authRoutes = express.Router();

authRoutes.post('/register', (req, res) => {
    // Handle user registration logic here
    res.send('User registered successfully');
});

authRoutes.post('/login', (req, res) => {
    // Handle user login logic here
    //res.send("LOGGIN OK");
    const {email, password} = req.body;

    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", password);

    return res.json({
        message: "Login successful",
        email,
        password
    });
});

export default authRoutes;