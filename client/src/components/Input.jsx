import React from 'react'

// Reusable input field component
const Input = ({placeholder, type, value, onChange}) => {
  return <input className='rounded-md px-20 py-5 my-3 text-center bg-opacity-10 bg-gray-500' type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    
}

export default Input