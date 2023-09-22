import React from 'react';
import {Routes, Route} from 'react-router-dom';
import useUserStatus from '../hooks/authentication/useUserStatus';
import ProtectedRoute from './ProtectedRoute';
import Homepage from '../components/Homepage'
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
import ChatApp from '../components/chat/ChatApp';

const AppRoutes = () => {
    const {authUser} = useUserStatus(); // Used to check if the user is authenticated or not
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={
            // This route ensures that only authenticated users can access the chat functionality.}
            <ProtectedRoute user={authUser}>
                <ChatApp />
            </ProtectedRoute>
        } />
        </Routes>
    )    
}

export default AppRoutes
