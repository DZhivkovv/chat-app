import React from 'react';
import useSignup from '../../hooks/authentication/useSignup';
import WelcomePanel from './WelcomePanel';
import { SignupMessage } from './Message';
import UserCredentialsForm from './UserCredentialsForm';
import AuthenticationPanel from './AuthenticationPanel';

const Signup = () => {
    const { signUp, signUpWithGoogle, signUpError } = useSignup(); //Functions to signup with email/password and with Google

    return (
        <div className="flex h-screen">
            {/* Left section of the page. */}
            <WelcomePanel/>

            {/* Right section of the page. */}
            <div className='flex flex-col items-center w-full lg:w-1/3'>
                <AuthenticationPanel title='Signup' onGoogleClick={()=>{signUpWithGoogle()}} linkText='Already have an account?' linkTo='/login'>
                    	<UserCredentialsForm onSubmit={signUp}>Signup</UserCredentialsForm>
                </AuthenticationPanel>

                {/* Displays error message if there is an error */}
                {signUpError && <SignupMessage error={signUpError}/>}        
            </div>
        </div>
    );
};

export default Signup;
