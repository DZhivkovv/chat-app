import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({children}) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center z-10'>
        <ClipLoader
        color="ffffff"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        <p className='mt-3'>{children}</p>
    </div>
  )
}

export default LoadingSpinner