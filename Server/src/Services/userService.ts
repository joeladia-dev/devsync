import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllUsers = async () => {
  return prisma.user.findMany({
    include: { teams: { include: { team: true } } },
  });
};

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: { teams: { include: { team: true } } },
  });
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};

export const updateUser = async (id: string, data: Partial<{ name: string; email: string; password: string }>) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: string) => {
  return prisma.user.delete({ where: { id } });
};
