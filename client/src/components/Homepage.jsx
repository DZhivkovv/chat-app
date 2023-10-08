import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lm3tdfmc.json';
import hobbiesImg from '../assets/featuresImages/hobbies.png' 
import friendImg from '../assets/featuresImages/friend.png'
import conversationImg from '../assets/featuresImages/conversation.png'

const HeroSection = () => {
    return(
        <div className='flex flex-col lg:flex-row h-[90%] w-full'>
<div className='h-full lg:w-1/3 flex flex-col justify-center items-center sm:w-full sm:text-center sm:bg-gray-100  md:bg-white rounded-lg p-4'>
    <h1 className='text-4xl sm:text-6xl font-bold py-5 sm:py-10 text-gray-800 sm:text-black'>Sedyanka</h1>
    <p className='text-sm sm:text-base text-gray-600 sm:text-gray-700'>Where every chat begins a story.</p>
</div>

            <div className='hidden md:flex md:justify-center lg:justify-end md:items-end h-full relative'>
                <Lottie animationData={animationData} className='w-4/5 bottom-0'/>
            </div>
        </div>
    )
}

const FeaturesSection = ({ children, feature, image, isReversed = false }) => {
    // Conditionally set the class name based on the `reverse` prop
    const containerClassName = `py-10 flex flex-col lg:flex-row w-full text-center justify-evenly items-center sm:bg-gray-100 md:bg-white ${isReversed ? 'lg:flex-row-reverse' : ''}` ;

    return (
      <div className={containerClassName}>
        <div>
            <img src={image} className='w-[500px]' alt={`${feature}`} />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>{feature}</h2>
            {children}
        </div>
      </div>
    );
}

const Home = () => {
    return(
        <div className='h-screen'>
        <Navbar/>
        <HeroSection/>
        <div className='w-full'>
            <FeaturesSection feature='Discover and connect' image={hobbiesImg}>
                <p>Browse through a diverse selection of chatrooms to find your niche. </p>
            </FeaturesSection>
            <FeaturesSection feature='Make new friends' image={friendImg} isReversed={true}>
                <p>Make friendships that last for a lifetime. </p>
            </FeaturesSection>
            <FeaturesSection feature='Communicate freely' image={conversationImg}>
                <p>Enjoy conversations with friends and strangers.</p> 
            </FeaturesSection>
        </div>
        <Footer/>
        </div>
    )
}
 
export default Home;
