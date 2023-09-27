import React from 'react';
import useUserStatus from '../hooks/authentication/useUserStatus';
import useMobileMenu from '../hooks/useMobileMenu';
import logout from '../utils/logout';
import links from '../data/navbarLinks';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

// Display links for authenticated and unauthenticated users
const NavigationLinks = ({ isMobileMenuOpen }) => {
  const containerStyle = isMobileMenuOpen
    ? 'md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white z-20 flex flex-col items-center space-y-5 text-xl py-10 transition transition-all duration-300'
    : 'hidden md:flex space-x-5';

  return (
    <div className={containerStyle}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.to}
          className={({ isActive }) => (isActive ? 'font-bold' : '')}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

// Display links for authenticated users only
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
// Display links for unauthenticated users only
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

const HamburgerMenuIcon = ({ handleClick, isMobileMenuOpen }) => {
  return (
    <div className='md:hidden z-50 '>
      <button onClick={handleClick}>
        {isMobileMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </div>
  );
};

const Navbar = () => {
  const { authUser } = useUserStatus();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <nav className='bg-gray-800 text-white px-5 py-3 md:h-[10%] flex justify-between items-center relative'>
      <HamburgerMenuIcon handleClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <NavigationLinks isMobileMenuOpen={isMobileMenuOpen} />

      {authUser ? (
        <AuthenticatedLinks authUser={authUser} logout={logout} />
      ) : (
        <UnauthenticatedLinks />
      )}
    </nav>
  );
};

export default React.memo(Navbar);
