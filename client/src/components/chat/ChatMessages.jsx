import React from 'react';
import useUserStatus from '../../hooks/authentication/useUserStatus';
import useChatScrollToBottom from '../../hooks/chat/useChatScrollToBottom';
import LoadingSpinner from '../LoadingSpinner';

// Component displaying chat notifications such as 'A user joined the room' or 'A user left the room'
const Notification = React.memo(({ notification }) => {
  return (
    <div className='w-screen text-center my-3'>
      <p>{notification}</p>
    </div>
  );
});

// Component displaying single chat message
const Message = React.memo(({ message, user, isCurrentUser }) => {
  // Determines the appearance of the messages based on whether they are sent by the logged-in user or other user.
  const messageContainerClass = 'w-[250px] flex mb-2 mx-3';
  const currentUserClass = 'bg-green-300 text-white';
  const otherUserClass = 'bg-gray-300 text-black';  
  const messageClass = isCurrentUser ? currentUserClass : otherUserClass;

  return (
    <div className={`${messageContainerClass} ${isCurrentUser ? '' : 'ml-auto'}`}>
      <p className={`bg-blue-300 p-2 rounded-lg ${messageClass}`}>
        {isCurrentUser ? 'You: ' : `${user}: `}
        {message}
      </p>
    </div>
  );
});

// Component displaying all chat messages and notifications
const ChatMessages =({ messages }) => {
  const { authUser } = useUserStatus(); //Get data about the authenticated user
  const chatMessagesRef = useChatScrollToBottom(messages); // Automatically scrolls to the bottom of the chat messages container

  if (!authUser) {
    return <LoadingSpinner/> // Display a loading message if the user is not authenticated.
  }

  return (
    <div className="flex flex-col max-h-[60vh] overflow-y-auto" ref={chatMessagesRef}>
      {messages.map((item, index) => {
        if (item.message) {
          return (
            <Message
              key={index}
              message={item.message}
              user={item.user}
              isCurrentUser={item.user === (authUser.displayName || authUser.email)}
            />
          );
        } else if (item.notification) {
          return <Notification key={index} notification={item.notification} />;
        }

        return null;
      })}
    </div>
  );
};

export default React.memo(ChatMessages); 
