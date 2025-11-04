import { prisma } from '../lib/prisma.js';

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('MongoDB Connected via Prisma');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
