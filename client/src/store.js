import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./features/chat/chatSlice";

export default configureStore({
    reducer:{
        chat: chatSlice,
    },
})