import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'; 

// Custom hook for checking user authentication status
const useUserStatus = () => {
    const [authUser, setAuthUser] = useState(null); 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                // If a user is authenticated, set the authUser state variable to the user object
                setAuthUser(user);
            } else {
                // If no user is authenticated, set the authUser state variable to null
                setAuthUser(null);
            }
        });

        // Unsubscribe from the listener when the component unmounts
        return () => {
            unsubscribe(); 
        };
    }, []);
    
    return { authUser };
};

export default useUserStatus;
