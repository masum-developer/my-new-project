import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const userProfile = (dName,pURL)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
  
  displayName: dName, photoURL: pURL
})
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('curr user', currentUser)
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        userProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;