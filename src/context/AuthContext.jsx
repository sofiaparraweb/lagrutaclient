import React, {useState, useEffect} from "react"
import { auth } from "../Firebase/Firebase"
import { createContext, useContext } from "react"
import { 
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword, 
   GoogleAuthProvider, 
   signInWithPopup, 
   signOut,
   onAuthStateChanged
} from "firebase/auth"
import { current } from "@reduxjs/toolkit"
import { useNavigate } from 'react-router-dom';


export const authContext = createContext()

export const useAuth = () => {
 const context = useContext(authContext);
 if(!context) {
    console.log("error creating auth context")
 }   
 return context;
}

export function AuthProvider ({children}) {
const history = useNavigate();

const [user, setUser] = useState("")
useEffect(() => {
   const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser){
         console.log("No current user")
         setUser("")
      } else {
         setUser(currentUser)
      }
   })
   return () => suscribed()
}, [])

const register = async (email, password) => {
 const response = await createUserWithEmailAndPassword(auth, email, password);
 console.log(response);
 history('/');
   };
   
const logIn = async (email, password) => {
 const response = await signInWithEmailAndPassword(auth, email, password);
 console.log(response);
 history('/');
         };
   
const logInGoogle = async () => {
  try {
    const responseGoogle = new GoogleAuthProvider();
    await signInWithPopup(auth, responseGoogle);
    history('/');
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
   const response = await signOut(auth);
   console.log(response)
   history('/');
  };
   return (
   <authContext.Provider
   value={{
      register,
      logIn,
      logInGoogle,
      logOut,
      user
   }}
   >
      {children}</authContext.Provider>
)
}