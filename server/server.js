import express from "express";           // Express for creating the HTTP server
import http from "http";                 
import { Server } from "socket.io";      
import cors from "cors";
import dotenv from 'dotenv';

// Create an express application
const app = express();
app.use(cors()); // Enable CORS for the express app

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Initialize Socket.io with CORS configuration on top of the HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

dotenv.config();
const port = process.env.PORT;

server.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
