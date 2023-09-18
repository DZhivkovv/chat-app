import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from '../components/Homepage'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )    
}

export default AppRoutes
