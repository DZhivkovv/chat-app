import React from "react";
import Navbar from "../Navbar";
import useUserStatus from "../../hooks/authentication/useUserStatus";
import useSocket from "../../hooks/useSocket";
import useChatRoom from "../../hooks/chat/useChatRoom";

function ChatApp() {
  const socket = useSocket(); // Initializes a socket.io connection.
  const { authUser } = useUserStatus() // Gets data about the authenticated user;
  const { room, handleRoomJoin, handleRoomLeave } = useChatRoom(socket, authUser);

  return (
    <div className="h-screen">
      <Navbar/>
    </div>
  );
}

export default ChatApp;
