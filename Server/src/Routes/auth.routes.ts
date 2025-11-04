import { Router } from 'express';

const router = Router();

// Auth routes will be added here
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

export default router;

