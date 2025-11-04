import { Router } from 'express';
import { getNotes, createNote } from '../Controllers/note.controllers.js';

const router = Router();

router.get('/', getNotes);
router.post('/', createNote);

export default router;

