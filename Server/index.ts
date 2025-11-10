import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validateClerkToken, AuthRequest } from './src/Middlewares/auth';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Protected route example
app.get('/api/user-data', validateClerkToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.auth?.userId;
    // Fetch user specific data from your database using userId
    res.json({ message: 'Protected data', userId });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});