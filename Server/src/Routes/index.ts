import { Router } from 'express';
import authRoutes from './auth.routes.js';
import noteRoutes from './note.routes.js';
import standupRoutes from './standup.routes.js';
import teamRoutes from './team.routes.js';
import userRoutes from './userRoutes.js';
import { getCurrentUserData } from '../Controllers/userController.js';
import { validateClerkToken } from '../Middlewares/auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);
router.use('/standups', standupRoutes);
router.use('/teams', teamRoutes);
router.use('/users', userRoutes);

// Direct route for /user-data (not under /users prefix)
router.get('/user-data', validateClerkToken, getCurrentUserData);

export default router;
