import React from 'react';
import { NavLink } from 'react-router-dom';
import useUserStatus from '../hooks/authentication/useUserStatus';
import logout from '../utils/logout';
import links from '../data/navbarLinks';

// Component to display links for authenticated users
const AuthenticatedLinks = ({ authUser, logout }) => (
  <div className='flex items-center'>
    <p className='mx-2 font-bold'>{authUser.email}</p>
    <button
      className='bg-green-400 hover:bg-green-500 font-bold text-white px-4 py-2 rounded'
      onClick={logout}
    >
      Logout
    </button>
  </div>
);

// Component to display links for unauthenticated users
const UnauthenticatedLinks = () => (
  <div className='flex items-center'>
    <NavLink to='/login' className='bg-blue-700 font-bold text-white px-4 py-2 rounded'>
      Login
    </NavLink>
    <NavLink to='/signup' className='bg-blue-800 font-bold text-white px-5 mx-3 py-2 rounded'>
      Signup
    </NavLink>
  </div>
);

// Main Navbar Component
const Navbar = () => {
  const { authUser } = useUserStatus();

  return (
    <nav className='bg-gray-800 text-white px-5 py-3 h-[10%] '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex space-x-4'>
          {/* Mapping and rendering navigation links */}
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive, isPending }) =>
                isActive ? "font-bold" : ""
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Displaying authenticated or unauthenticated links based on user status */}
        {authUser ? (
          <AuthenticatedLinks authUser={authUser} logout={logout} />
        ) : (
          <UnauthenticatedLinks />
        )}
      </div>
    </nav>
  );
};

// Exporting the Navbar component with React.memo for optimization
export default React.memo(Navbar);
