import { useState } from 'react';

// A custom hook for managing authentication-related input fields (email and password)
const useAuthFields = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return { email, setEmail, password, setPassword };
};

export default useAuthFields;
