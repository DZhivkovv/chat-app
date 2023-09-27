import { useState, useEffect } from "react";

// A custom hook that is used to redirect the user if he is not authenticated in the app. The hook is being used in a ProtectedRoute component.
const useRedirect = (user) => {
    const [redirect, setRedirect] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state
  
    useEffect(() => {
      // If the user is not authenticated, wait for a few seconds
      // before redirecting them to the login page.
      if (!user) {
        const delay = setTimeout(() => {
          setRedirect(true);
          setIsLoading(false); 
        }, 6000);
  
        // Cleanup the timer when the component unmounts
        return () => {
          clearTimeout(delay);
          setIsLoading(false); // Ensure loading state is set to false on unmount
        };
      } else {
        setIsLoading(false); // Set loading state to false if user is authenticated
      }
    }, [user]);
  
    return { redirect, isLoading };
}

export default useRedirect