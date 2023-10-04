import React from 'react';

export const LoginMessage = ({ error = '' }) => {
    let message = ''
    
    switch(error.code){
        case 'auth/invalid-email' : 
            message = 'Invalid email!';
            break
        case 'auth/wrong-password' : 
            message = 'Wrong email or password!';
            break
        case 'auth/user-not-found':
            message = 'Wrong email or password!';
            break
        case 'auth/user-disabled':
            message = 'The account has been disabled!';
            break;
        default:
            message = ''
    }

    return (
        <div>
            <p className='text-red-500 font-bold mt-5'>{message}</p>
        </div>
    );
};

export const SignupMessage = ({ error = '' }) => {
    let message = ''
    
    switch(error.code){
        case 'auth/weak-password':
            message = 'Weak password!';
            break;
        case 'auth/email-already-in-use':
            message = 'Email already in use!';
            break;
        case 'auth/invalid-email':
            message = 'Invalid email!';
            break;
        default:
            message = '';
    }

    return (
        <div>
            <p className='text-red-500 font-bold mt-5'>{message}</p>
        </div>
    );
};

