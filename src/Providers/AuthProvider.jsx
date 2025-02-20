import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoding] = useState(true)

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    
    }

    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    const logIn = (email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside on auth state change', currentUser);
            setUser(currentUser);
            setLoding(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])




    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;