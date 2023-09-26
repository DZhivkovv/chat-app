import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center z-10'>
        <ClipLoader
        color="ffffff"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
  )
}

export default LoadingSpinner