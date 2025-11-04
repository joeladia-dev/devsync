import type { Request, Response } from 'express-serve-static-core';

export const getNotes = async (_req: Request, res: Response) => {
  res.json({ message: 'Get all notes for user' });
};

export const createNote = async (_req: Request, res: Response) => {
  res.json({ message: 'Create new note' });
};
