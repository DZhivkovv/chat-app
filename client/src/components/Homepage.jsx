import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lm3tdfmc.json';
import hobbiesImg from '../assets/featuresImages/hobbies.png' 
import friendImg from '../assets/featuresImages/friend.png'
import conversationImg from '../assets/featuresImages/conversation.png'

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

const FeaturesSection = ({ children, feature, image, isReversed = false }) => {
    // Conditionally set the class name based on the `reverse` prop
    const containerClassName = `py-10 flex flex-col lg:flex-row w-[95%] text-center justify-evenly items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`;
  
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
        <HeroSection/>
        <div className='w-full'>
            <FeaturesSection feature='Discover and connect' image={hobbiesImg}>
                <p>Browse through a diverse selection of chatrooms to find your niche. </p>
            </FeaturesSection>
            <FeaturesSection feature='Communicate freely' image={conversationImg}>
                <p>Enjoy conversations with friends and strangers.</p> 
            </FeaturesSection>
            <FeaturesSection feature='Make new friends' image={friendImg} isReversed={true}>
                <p>Make friendships that last for a lifetime. </p>
            </FeaturesSection>
        </div>
        </div>
    )
}
 
export default Home;
