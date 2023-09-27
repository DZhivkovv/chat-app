import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useRedirect from '../hooks/authentication/useRedirect';
import LoadingSpinner from '../components/LoadingSpinner';
// This component restricts access for unauthenticated users to specific pages in the application.
// If the user is not authenticated, it waits for a delay and then redirects them to the login page.

const ProtectedRoute = ({ user, children }) => {
  const {isLoading, redirect} = useRedirect(user);

  if (isLoading) {
    // Display loading spinner while waiting
    return <LoadingSpinner/>;
  }

  if (redirect) {
    // If the user is not authenticated, redirect him to the login page
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
