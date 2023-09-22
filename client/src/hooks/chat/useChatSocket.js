import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage, saveJoinNotification, saveLeaveNotification } from '../../features/chat/chatSlice';
import useUserStatus from '../authentication/useUserStatus';

// Custom hook for managing chat functionality with a socket connection
const useChatSocket = (socket, room) => {
    const dispatch = useDispatch();
    const { authUser } = useUserStatus(); // Get data about the authenticated user

    const messages = useSelector(state => state.chat); //Get all messages from the redux store

    const [messageSent, setMessageSent] = useState(''); // State to track the message being typed/sent

    
    const handleSendMessage = useCallback(() => {
        if (messageSent.length > 0) {
            // Emit the message to the server
            socket.emit("send_message", { messageSent, room: room.id, authUser });
                    
            const user = authUser.displayName || authUser.email; // Extract user information for the message
            dispatch(saveMessage({ messageSent, user }));// Save the sent message in the redux store
        
            setMessageSent(''); // Clear the message input field
        } else {
            console.log('handle this');
        }
    }, [socket, room.id, messageSent, dispatch, authUser]);


    // Set up socket event listeners when the component mounts
    useEffect(() => {
        // Function to handle receiving a message
        const handleReceiveMessage = ({ messageSent, user }) => {
            // Save the received message in the redux store.
            dispatch(saveMessage({ messageSent, user }));
        };

        // Function to handle notifications about a user joining the chat room
        const dispatchJoinNotification  = (data) => {
            // Dispatch an action to save the join notification
            dispatch(saveJoinNotification(data));
        };

        // Function to handle notifications about a user leaving the chat room
        const dispatchLeaveNotification  = (data) => {
            // Dispatch an action to save the leave notification
            dispatch(saveLeaveNotification(data));
        }


        socket.on("save_message", handleReceiveMessage);
        socket.on("user_joined", dispatchJoinNotification);
        socket.on("user_left", dispatchLeaveNotification );
        
        return () => {
            socket.off("save_message", handleReceiveMessage);
            socket.off("user_joined", dispatchJoinNotification);
            socket.off("user_left", dispatchLeaveNotification );
        };
    }, [socket, dispatch]);


    return {
        messages,
        messageSent,
        setMessageSent,
        handleSendMessage,
    };
};

export default useChatSocket;
