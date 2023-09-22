import React from "react";
import Navbar from "../Navbar";
import ChooseRoom from "./ChooseRoom";
import ChatRoom from './ChatRoom'
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

      {/* If the user hasn't selected a chat room, they will be presented with a menu with different chatrooms from which they can choose. Otherwise, they will be shown the chat room itself. */}
      {!room ? (
        <ChooseRoom onRoomClick={handleRoomJoin} />
      ) : (
        <ChatRoom socket={socket} room={room} onLeave={handleRoomLeave}/>
      )}
    </div>
  );
}

export default ChatApp;
