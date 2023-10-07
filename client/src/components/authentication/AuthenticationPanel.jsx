import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {AiFillGoogleCircle} from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi';

const AuthenticationPanel = ({ title, children, onGoogleClick, linkText, linkTo }) => {
  return (
    <div className="w-full bg-blue-700 lg:bg-white text-white lg:text-black flex flex-col h-full justify-center items-center p-8">
      {/* Link from login/signup form to homepage */}
      <div className='absolute top-10 left-10 lg:hidden'>
        <Link to='/' className="text-white hover:text-gray-300">
          <BiArrowBack className='text-3xl m-5' />
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* Login/Signup form be here */}
      <div className='w-full flex flex-col items-center'>
        {children}
      </div>

      {/* A button for Google login/signup. */}
      <div className='flex flex-col items-center'>
          <p className="text-center text-white lg:text-gray-600 mt-4 ">Or use:</p>
          <Button type="button" handleClick={onGoogleClick} className="mt-4 bg-red-600 hover:bg-red-700">
            <AiFillGoogleCircle className='text-3xl text-gray-500  hover:text-blue-400'/>
          </Button>
      </div>

      {/* Link from login page to signup page or the opposite. */}
      <div className='mt-5 flex flex-wrap justify-center'>
        <p className='pr-2 block'>{linkText}</p>
        <Link to={linkTo} className='font-bold text-blue-500'>{linkText}</Link>
      </div>
    </div>
  );
};

export default AuthenticationPanel;
