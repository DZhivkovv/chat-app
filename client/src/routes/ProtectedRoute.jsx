import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

//This component restricts access for unauthenticated users to specific pages in the application. If the user is not authenticated, it redirects them to the login page

const ProtectedRoute = ({user, children}) => {
    if(!user){
        return(
            <Navigate to='/login' replace/>
        )
    }


    return children ? children: <Outlet/>
}

export default ProtectedRoute