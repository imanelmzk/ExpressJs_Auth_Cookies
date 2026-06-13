import express, {Application} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from '../controllers/auth.controller';


// import morgan from 'morgan';
// import helmet from 'helmet';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use("/api", authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
// app.use(morgan('dev'));
// app.use(helmet());

export default app;