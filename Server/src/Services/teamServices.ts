import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllTeams = async () => {
  return prisma.team.findMany({
    include: { members: { include: { user: true } } },
  });
};

export const getTeamById = async (id: string) => {
  return prisma.team.findUnique({
    where: { id },
    include: { members: { include: { user: true } } },
  });
};

export const createTeam = async (data: { name: string; description?: string }) => {
  return prisma.team.create({ data });
};

export const updateTeam = async (id: string, data: Partial<{ name: string; description?: string }>) => {
  return prisma.team.update({ where: { id }, data });
};

export const deleteTeam = async (id: string) => {
  return prisma.team.delete({ where: { id } });
};
