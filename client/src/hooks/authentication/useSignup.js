import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase authentication functions
import { auth } from '../../firebase'; // Import the Firebase auth instance

// Custom hook for user signup
const useSignup = () => {
    const navigate = useNavigate();

    // Function for email and password signup
    const signUp = (event, email, password) => {
        event.preventDefault();

        // Create a new user with email and password using Firebase authentication
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/login'); // Redirect to the login page after successful signup
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Function for Google sign-up
    const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider(); 

        // Sign in with Google using Firebase authentication
        return signInWithPopup(auth, provider)
            .then(() => {
                navigate('/login'); // Redirect to the login page after successful Google signup
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return { signUp, signUpWithGoogle };
};

export default useSignup;
