  // Function to handle joining a chat room
  function handleJoinRoom(socket, rooms) {
    socket.on("join_room", ({ room, authUser }) => {
      const { id, roomName } = room;
      const user = authUser.displayName || authUser.email;
      socket.join(id);
  
      // Create the room in the 'rooms' object if it doesn't exist
      if (!rooms[roomName]) {
        rooms[roomName] = new Set();
      }
      rooms[roomName].add(user);
  
      const usersInRoom = Array.from(rooms[roomName]);
  
      // Emit user_joined event to the current user and others in the room
      socket.emit("user_joined", { usersInRoom, user });
      socket.to(id).emit("user_joined", { usersInRoom, user });
    });
  }
  
  // Function to handle leaving a chat room
  function handleLeaveRoom(socket) {
    socket.on("leave_room", ({ room, authUser }) => {
      const { id, roomName } = room;
      const user = authUser.displayName || authUser.email;
      socket.leave(id);
  
      // Emit user_left event to notify others in the room
      socket.to(id).emit("user_left", user);
    });
  }
  
  // Function to handle sending a message
  function handleSendMessage(socket) {
    socket.on("send_message", ({ messageSent, room, authUser }) => {
      // Broadcast the message to everyone in the room except the sender
      socket.to(room).emit("save_message", {
        messageSent,
        user: authUser.displayName || authUser.email,
      });
    });
  }
  
  // Export the main function that sets up Socket.io event handlers
  export default (io, rooms) => {
    io.on("connection", (socket) => {
      // Call the individual event handler functions
      handleJoinRoom(socket, rooms);
      handleLeaveRoom(socket);
      handleSendMessage(socket);
    });
  };
  