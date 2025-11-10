import type { Request, Response } from 'express-serve-static-core';
import * as userService from '../Services/userService.js';
import type { AuthRequest } from '../Middlewares/auth.js';

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  const user = await userService.updateUser(id, req.body);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  await userService.deleteUser(id);
  res.status(204).send();
};

export const getCurrentUserData = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      userId: user.id,
      message: 'User data retrieved successfully',
      ...user
    });
  } catch (error) {
    console.error('Error fetching current user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
