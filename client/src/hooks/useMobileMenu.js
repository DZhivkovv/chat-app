import { useState, useEffect } from 'react';

// A custom hook that manages the state of the mobile navigation bar 
const useMobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggles the mobile menu state (open, closed)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Checks if the window width is greater than or equal to 768 pixels
      if (window.innerWidth >= 768) {
        // If so, closes the mobile menu
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    // Removes the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobileMenuOpen, toggleMobileMenu };
};

export default useMobileMenu;
