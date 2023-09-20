import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'


// A styled welcome panel displayed in the login and signup pages.
const WelcomePanel = () => {
  return (
    <div className="hidden lg:block lg:w-2/3 h-screen bg-diagonal-stripes ">
        {/* A button navigating to the homepage */}
        <Link to='/'>
            <BiArrowBack className='text-3xl m-5'/>
        </Link>
        
        {/* A header and welcome slogan */}
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sedyanka</h1>
            <p className="text-gray-700">Your destination for something great!</p>
        </div>
    </div>
)
}

export default WelcomePanel