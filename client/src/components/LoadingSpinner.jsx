import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <div className='w-screen h-[90%] flex justify-center items-center'>
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