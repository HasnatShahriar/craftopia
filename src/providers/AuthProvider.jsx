import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null);

// social media
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sign in
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // google sign in
  const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }


  // github sign in
  const githubSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    githubSignIn

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;