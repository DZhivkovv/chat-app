import { useEffect, useRef } from 'react';

// Custom hook for automatically scrolling to the bottom of a chat messages container
const useChatScrollToBottom = (messages) => {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return chatMessagesRef;
};

export default useChatScrollToBottom;
