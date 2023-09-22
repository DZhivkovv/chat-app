import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatSlice = createSlice({
    name: 'chat', 
    initialState, 
    reducers: {
        // Save a chat message to the redux store
        saveMessage(state, action) {
            const { messageSent, user } = action.payload;
            // Add a new message to the state array
            return [...state, { message: messageSent, user }];
        },
        // Reducer to clear all chat messages on room leave.
        clearMessages(state) {
            return initialState; 
        },
        // Save a join notification to the redux store
        saveJoinNotification(state, action) {
            const { user } = action.payload;
            return [...state, { notification: `${user} joined the room!` }];
        },
        // Save a leave notification to the redux store
        saveLeaveNotification(state, action) {
            const user = action.payload;
            return [...state, { notification: `${user} left the room!` }];
        }
    }
});

export const { saveMessage, clearMessages, saveJoinNotification, saveLeaveNotification } = chatSlice.actions;
export default chatSlice.reducer;
