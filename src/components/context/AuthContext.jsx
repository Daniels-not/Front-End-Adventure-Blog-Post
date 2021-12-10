import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from "../../database/firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); // useAuth() hook to access AuthContext from other components (e.g. App.jsx)

export const AuthProvider = ({ children }) => { // AuthProvider component to wrap all other components in the application (e.g. App.jsx)
    const [currentUser, setCurrentUser] = useState({}); // currentUser state to store the current user

    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    } // log in user with email and password and return user

    const logOut = () => {
        auth.signOut()
    } // log out user

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])

    const signUp = (name, lastName, email,username, password) => { // sign up user with email and password and return user
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user;
                user.updateProfile({
                    displayName: `${name} ${lastName}` // update user profile with name and last name (e.g. App.jsx)
                })
                .then(() => {
                    return setCurrentUser(user); // set current user (e.g. App.jsx)
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
        })
    }

    const value = {
        signUp,
        logIn,
        logOut,
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}