import { useState } from "react";

const useChatRoom = (socket, authUser) => {
  const [room, setRoom] = useState(""); // The currently selected chat room.

  // Function to handle joining a chat room.
  const handleRoomJoin = async (room) => {
    setRoom(room); // Update the selected chat room.

    if (room !== "") {
      // Emit a "join_room" event to the server with the room name and authenticated user information.
      socket.emit("join_room", { room, authUser });
    }
  };

  // Function to handle leaving a chat room.
  const handleRoomLeave = () => {
    // Emit a "leave_room" event to the server with the room name and authenticated user information.
    socket.emit("leave_room", { room, authUser });
    setRoom(""); // Clear the currently selected chat room.
  };

  // Return the currently selected chat room and the functions to join and leave chat rooms.
  return { room, handleRoomJoin, handleRoomLeave };
};

export default useChatRoom; 
