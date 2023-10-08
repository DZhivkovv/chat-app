import express from "express";
import http from "http";                 
import { Server } from "socket.io";      
import cors from "cors";
import dotenv from 'dotenv';
import socketHandlers from "./socketHandlers.js";

// Create an express application
const app = express();
app.use(cors()); // Enable CORS for the express app

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Initialize Socket.io with CORS configuration on top of the HTTP server
const io = new Server(server, {
  cors: {
    origin: "https://chat-app-frontend-0u5l.onrender.com",
    methods: ["GET", "POST"],
  },
});

// Initialize an empty object to store chat room data
const rooms = {};

// Call the custom Socket.io event handlers from the imported module
socketHandlers(io, rooms);


dotenv.config();
const port = process.env.PORT;

server.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
