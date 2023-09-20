import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from '../components/Homepage'
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )    
}

export default AppRoutes
