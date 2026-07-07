import express from 'express';
import {register, login} from '../controllers/auth.controller';
import {profile} from '../controllers/auth.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', register);
//router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);


export default router;