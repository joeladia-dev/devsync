import { Router } from 'express';
import authRoutes from './auth.routes.js';
import noteRoutes from './note.routes.js';
import standupRoutes from './standup.routes.js';
import teamRoutes from './team.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);
router.use('/standups', standupRoutes);
router.use('/teams', teamRoutes);

export default router;
