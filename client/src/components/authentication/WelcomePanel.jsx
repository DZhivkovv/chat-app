import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const WelcomePanel = () => {
  return (
    <div className="hidden lg:block lg:w-2/3 h-screen bg-blue-900 text-white p-8">
      <div className="text-center">
        <Link to='/' className="text-white hover:text-gray-300">
          <BiArrowBack className='text-3xl m-5' />
        </Link>
        <h1 className="text-4xl font-bold mb-4">Welcome to Sedyanka</h1>
        <p className="text-gray-400 text-lg">Your destination for something great!</p>
      </div>
    </div>
  );
};

export default WelcomePanel;
