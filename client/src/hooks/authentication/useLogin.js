import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase'

//Custom React hook that encapsulates login functionality for both email/password and Google authentication methods using Firebase.
const useLogin = () => {
    const navigate = useNavigate();
    // Function to log in with email and password
    const login = (event, email, password) => {
        event.preventDefault();
        // Sign in with email and password using Firebase authentication
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Redirect to the home page after successful login
            navigate('/');
        })
        .catch((error)=>{
            // Handle and log any errors that occur during login
            console.log(error);
        })
    }

    // Function to log in with Google
    const loginWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                // Redirect to the home page after successful login
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }, [navigate]);

    // Return the login and loginWithGoogle functions to be used in components
    return { login, loginWithGoogle };
}

export default useLogin;
