import { prisma } from '../lib/prisma.js';

export const getAllTeams = async () => {
  return await prisma.team.findMany();
};

export const getTeamById = async (id: string) => {
  return await prisma.team.findUnique({
    where: { id },
  });
};

export const createTeam = async (data: { name: string; description?: string }) => {
  return await prisma.team.create({
    data,
  });
};

export const updateTeam = async (id: string, data: { name?: string; description?: string }) => {
  return await prisma.team.update({
    where: { id },
    data,
  });
};

export const deleteTeam = async (id: string) => {
  return await prisma.team.delete({
    where: { id },
  });
};

