import { signOut } from 'firebase/auth'; 
import { auth } from '../firebase'; 

const logout = () => {
    // Firebase signOut function to log the user out
    signOut(auth);
}

export default logout

