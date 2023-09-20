import React from 'react';
import useSignup from '../../hooks/authentication/useSignup';
import WelcomePanel from './WelcomePanel';
import UserCredentialsForm from './UserCredentialsForm';
import Button from '../Button';
import { Link } from 'react-router-dom';
import {AiFillGoogleCircle} from 'react-icons/ai'

const Signup = () => {
    const { signUp, signUpWithGoogle } = useSignup(); //Functions to signup with email/password and with Google

    return (
        <div className="flex h-screen">
            {/* Left section of the page. */}
            <WelcomePanel/>

            {/* Right section of the page. */}
            <div className="flex flex-col h-full justify-center items-center p-8">
                <h1 className="text-3xl font-bold mb-6">Create Account</h1>
                
                {/* Signup form */}
                <UserCredentialsForm handleSubmit={signUp}>Signup</UserCredentialsForm>
                
                {/* A button for Google signup. */}
                <div className='flex flex-col items-center'>
                    <p className="text-center text-gray-600 mt-4">Or use:</p>
                    <Button type="button" handleClick={signUpWithGoogle} className="mt-4 bg-red-600 hover:bg-red-700">
                        <AiFillGoogleCircle className='text-3xl text-gray-500  hover:text-blue-400'/>
                    </Button>

                </div>

                {/*Link to login page */}          
                <div className='mt-5 flex justify-center'>
                    <p className='pr-2'>Already have an account?</p>
                    <Link to='/login' className='font-bold text-blue-500'>Login</Link>
                </div>

            </div>
        </div>
    );
};

export default Signup;
