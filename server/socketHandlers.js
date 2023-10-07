  // Function to handle joining a chat room
  function handleJoinRoom(socket, rooms) {
    socket.on("join_room", ({ room, authUser }) => {
      const { id, roomName } = room;
      const user = authUser.displayName || authUser.email || "Guest";
      socket.join(id);
  
      socket.to(id).emit("user_joined", { user });
      handleUserDisconnect(socket, user, id);
    });
  }
  // Function to handle leaving a chat room
  function handleLeaveRoom(socket) {
    socket.on("leave_room", ({ room, authUser }) => {
      const { id } = room;
      const user = authUser.displayName || authUser.email;
      socket.leave(id);
  
      // Emit user_left event to notify others in the room
      socket.to(id).emit("user_left", user);
    });
  }
   
  // Notifies the users in a chat room when another user disconnects
  function handleUserDisconnect(socket, user, roomId) {
    if(user){
      socket.on("disconnect", () => {
        socket.to(roomId).emit("user_left", user);
      });        
    }  
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
      handleUserDisconnect(socket);
      handleSendMessage(socket);
    });
  };
  