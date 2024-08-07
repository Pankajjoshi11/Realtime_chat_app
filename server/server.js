const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Uncomment and update the following lines when ready to use Socket.io
// const { Server } = require('socket.io');
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Adjust based on your frontend URL
//     methods: ["GET", "POST"],
//   },
// });

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Uncomment and update the following lines when ready to use Socket.io
// // Socket.io Logic
// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   socket.on('sendMessage', (message) => {
//     io.emit('receiveMessage', message);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
