import { app } from './app.js';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { initSockets } from './Sockets/index.js';
import { connectDB } from './Config/db.js';

connectDB();

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: '*' },
});

initSockets(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
