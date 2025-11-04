import { Router } from 'express';

const router = Router();

// Standup routes will be added here
router.get('/', (req, res) => {
  res.json({ message: 'Get standups' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create standup' });
});

export default router;

