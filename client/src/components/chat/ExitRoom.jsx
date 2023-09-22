import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { clearMessages } from '../../features/chat/chatSlice';

// Contains the functionality for leaving a chat room
const ExitRoom = ({ onLeave }) => {
    const dispatch = useDispatch();

    // Function to handle the chat room exit 
    const handleExitClick = useCallback(() => {
        // Call the onLeave callback provided by the parent component
        onLeave();
        // Dispatch function that clears the messages sent in the chat room the user wants to leave. When the user enters the same room again, he will not see any messages.
        dispatch(clearMessages());
    }, [onLeave, dispatch]);

    return (
        <div>
            {/* Render the exit button */}
            <ImExit className='text-2xl ml-4 cursor-pointer' onClick={handleExitClick} title='Leave the room' />
        </div>
    );
};

export default React.memo(ExitRoom);
