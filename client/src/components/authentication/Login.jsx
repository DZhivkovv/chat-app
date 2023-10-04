import useLogin from '../../hooks/authentication/useLogin';
import WelcomePanel from './WelcomePanel'; 
import UserCredentialsForm from './UserCredentialsForm';
import Button from '../Button'; 
import { LoginMessage } from './Message';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';

const Login = () => {
    const { login, loginWithGoogle, loginError } = useLogin(); //Functions to login with email/password and with Google

    return (
        <div className="flex h-screen">     
            {/* Left part of the page. */}
            <WelcomePanel/> 

            {/* Right part of the page. */}            
            <div className="flex flex-col h-full justify-center items-center p-8">
                <h1 className="text-3xl font-bold mb-6">Login</h1> 
                
                {/* Login form */}
                <UserCredentialsForm handleSubmit={login}> Login </UserCredentialsForm>
                
                {/* Displays error message if there is an error */}
                {loginError && <LoginMessage error={loginError}/>}

                <p className="text-center text-gray-600 mt-4">Or use</p> 
                {/* A button for Google login. */}
                <Button type="button" handleClick={loginWithGoogle} className="mt-4 bg-blue-600 hover:bg-blue-700"> 
                    <AiFillGoogleCircle className='text-3xl text-gray-500  hover:text-blue-400'/>
                </Button>
                
                {/*Link to signup page */}
                <div className='mt-5 flex flex-wrap justify-center'> 
                    <p className='pr-2 block'>Don't have an account yet?</p> 
                    <Link to='/signup' className='font-bold text-blue-500'>Create an account</Link> 
                </div>
            </div>
        </div>
    );
};

export default Login; 