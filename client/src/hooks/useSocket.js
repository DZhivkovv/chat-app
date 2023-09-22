import { useState, useEffect } from "react";
import io from "socket.io-client";

//A custom hook that establishes a socket.io connection to the server. 
const useSocket = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    // Create a new socket connection to the server.
    const newSocket = io.connect("http://localhost:3001");
    setSocket(newSocket);

    // Disconnect the socket when the component unmounts.
    return () => {
      newSocket.disconnect();
    };

  }, []); 
  return socket;
};

export default useSocket; 