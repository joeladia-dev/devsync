import type { Server } from 'socket.io';
import { registerStandupSockets } from './standup.socket.js';

export const initSockets = (io: Server) => {
  io.on('connection', (socket) => {
    console.log(`🔌 User connected: ${socket.id}`);
    registerStandupSockets(io, socket);
  });
};
