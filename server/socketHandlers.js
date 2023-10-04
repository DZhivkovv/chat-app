  // Function to handle joining a chat room
  function handleJoinRoom(socket, rooms) {
    socket.on("join_room", ({ room, authUser }) => {
      const { id, roomName } = room; //The id and the name of the room that the user joins
      const user = authUser.displayName || authUser.email || 'Guest'; // The username or the email of the user (depends of the authentication method they used)

      socket.join(id); // Join the room
      // Notify the current user and others in the room 
      socket.emit("user_joined", {user});
      socket.to(id).emit("user_joined", {user} );
    });
  }
  
  // Function to handle leaving a chat room
  function handleLeaveRoom(socket) {
    socket.on("leave_room", ({ room, authUser }) => {
      const { id } = room; // The id of the room that the user is leaving
      const user = authUser.displayName || authUser.email; // The username or the email of the user (depends of the authentication method they used)
      
      socket.leave(id); //Leave the room
  
      // Notify others in the room that the user is leaving
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
  