import type { Request, Response } from 'express-serve-static-core';
import * as teamService from '../Services/teamService.js';

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await teamService.getAllTeams();
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const getTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Team ID is required' });
  
  const team = await teamService.getTeamById(id);
  if (!team) return res.status(404).json({ message: 'Team not found' });
  res.json(team);
};

export const createTeam = async (req: Request, res: Response) => {
  try {
    const team = await teamService.createTeam(req.body);
    res.status(201).json(team);
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const updateTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Team ID is required' });
  
  const team = await teamService.updateTeam(id, req.body);
  res.json(team);
};

export const deleteTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Team ID is required' });
  
  await teamService.deleteTeam(id);
  res.status(204).send();
};
