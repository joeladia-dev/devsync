import type { Server, Socket } from 'socket.io';

export const registerStandupSockets = (io: Server, socket: Socket) => {
  socket.on('updateStandup', (data) => {
    io.emit('standupUpdated', data);
  });
};
