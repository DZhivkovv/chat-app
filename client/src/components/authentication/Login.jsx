import useLogin from '../../hooks/authentication/useLogin';
import WelcomePanel from './WelcomePanel'; 
import UserCredentialsForm from './UserCredentialsForm';
import { LoginMessage } from './Message';
import AuthenticationPanel from './AuthenticationPanel';

const Login = () => {
    const { login, loginWithGoogle, loginError } = useLogin(); //Functions to login with email/password and with Google

    return (
        <div className="flex h-screen">     
            {/* Left part of the page. */}
            <WelcomePanel/> 

            {/* Right part of the page. */}
            <div className='flex flex-col items-center w-full lg:w-1/3'>
                <AuthenticationPanel title='Login' onGoogleClick={()=>{loginWithGoogle()}} linkText="Don't have an account?" linkTo='/signup'>
                    <UserCredentialsForm onSubmit={login}>Signup</UserCredentialsForm>
                </AuthenticationPanel>
        
                {/* Displays error message if there is an error */}
                {loginError && <LoginMessage error={loginError}/>}
            </div>
        </div>
    );
};

export default Login; 