import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lm3tdfmc.json';
const HeroSection = () => {
    return(
        <div className='flex flex-col lg:flex-row h-[90%] w-full'>
            <div className='w-screen lg:w-1/3  flex flex-col justify-center items-center h-1/3 '>
                <div className='w-full text-center'>
                    <h1 className='text-6xl font-bold py-10'>Sedyanka</h1>
                    <p>Where every chat begins a story.</p>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end items-end h-full relative'>
                <Lottie animationData={animationData} className='w-4/5 bottom-0'/>
            </div>
        </div>
    )
}

const Home = () => {
    return(
        <div className='h-screen'>
        <HeroSection/>
        </div>
    )
}
