import React from "react";
import Navbar from "../Navbar";
import useUserStatus from "../../hooks/authentication/useUserStatus";

function ChatApp() {
  const { authUser } = useUserStatus() // Gets data about the authenticated user;
  return (
    <div className="h-screen">
      <Navbar/>
    </div>
  );
}

export default ChatApp;
