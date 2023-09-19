import React from 'react'
import { NavLink } from 'react-router-dom';
import links from '../data/navbarLinks';

const Navbar = () => {
  
    return (
      <nav className='bg-gray-800 text-white px-5 py-3 h-[10%] '>
        <div className='container mx-auto flex justify-center items-center'>
          <div className='space-x-4'>
            {/* Mapping and rendering navigation links */}
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "font-bold" : ""
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  };
  
  
export default Navbar