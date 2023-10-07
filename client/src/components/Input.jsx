import React from 'react';

// Reusable input field component
const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className='rounded-md px-4 py-2 my-3 text-center bg-gray-200 border border-gray-400 shadow-sm'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
