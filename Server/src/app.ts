import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './Routes/index.js';

dotenv.config();

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);
