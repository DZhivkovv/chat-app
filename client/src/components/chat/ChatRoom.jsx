import React from 'react';
import useUserStatus from '../../hooks/authentication/useUserStatus';
import useChatSocket from '../../hooks/chat/useChatSocket';
import Input from '../Input';
import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner'
import ChatMessages from './ChatMessages'; 
import ExitRoom from './ExitRoom'; 
import { MdSend } from 'react-icons/md';
import useDisconnect from '../../hooks/chat/useDisconnect';

const ChatRoom = ({ socket, room, onLeave }) => {
  const { authUser } = useUserStatus(); // Get data about the authenticated user 
  const {
    messages,
    messageSent,
    setMessageSent,
    handleSendMessage,
  } = useChatSocket(socket, room); // Initialize functionality for sending messages using the useChatSocket custom hook

  useDisconnect(socket); //Listens in case the authenticated user disconnects from the room and cleans the messages.
  
  if (!authUser) {
    return <LoadingSpinner/>; // Display a loading spinner if the user data is not loaded yet
  }


  return (
    <div className='h-[90%]'>
      <div className='py-2'>
        <ExitRoom onLeave={onLeave} /> {/* Component for leaving the chat room */}
        <p className='text-center pb-3'>You are in room: {room.roomName}</p> {/* Display the current chat room's name */}
      </div>

      <ChatMessages messages={messages} /> {/* Display the chat messages */}
        
      {/* Input field for sending amessages in the chat room*/}
      <div className='flex justify-center w-full p-3 fixed bottom-0'>
        <Input
          placeholder='Send a message...'
          onChange={(event) => {
            setMessageSent(event.target.value);
          }}
          value={messageSent}
        />

        {/* Send the message */}
        <Button handleClick={handleSendMessage}>
          <MdSend className='ml-3 text-2xl hover:text-blue-300' /> {/* Send icon */}
        </Button>
      </div>
    </div>
  );
};

export default ChatRoom;
