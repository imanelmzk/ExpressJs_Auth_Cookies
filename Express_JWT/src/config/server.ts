import express, {Application} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '../controllers/auth.controller';
import authMiddleware from '../middleware/auth.middleware';


// import morgan from 'morgan';
// import helmet from 'helmet';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use("/api/", authRoutes);
//app.use("/api", authMiddleware); // Apply authMiddleware to protected routes
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// app.use(morgan('dev'));
// app.use(helmet());

export default app;