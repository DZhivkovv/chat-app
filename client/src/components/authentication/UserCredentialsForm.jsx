import React from 'react';
import Input from '../Input';
import useAuthFields from '../../hooks/authentication/useAuthFields';

// A form component used in Login and Signup pages
const UserCredentialForm = ({ children, onSubmit }) => {
    // Use the custom hook to manage email and password fields
    const { email, setEmail, password, setPassword } = useAuthFields();

    return (
        <form
            onSubmit={(event) => {
                onSubmit(event, email, password);
            }}
            className="w-full max-w-xs flex flex-col items-center text-black"
        >
            {/* Input field for email */}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                    // Update the email state when the input changes
                    setEmail(event.target.value);
                }}
                className="mb-4"
            />

            {/* Input field for password */}
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                    // Update the password state when the input changes
                    setPassword(event.target.value);
                }}
                className="mb-6"
            />

            {/* Submit button */}
            <button
                className="bg-blue-300 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-200"
                type="submit"
            >
                {/* Display the content passed as children inside the button */}
                <p className='font-bold'>{children}</p>
            </button>
        </form>
    );
};

export default UserCredentialForm;