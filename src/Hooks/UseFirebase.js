import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from 'react';
import initialization from "../Firebase/firebase.init";

initialization()
const UseFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in with google 
    const signInUsingGoogle = (navigation, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                saveUserTodb(user.email, user.displayName, 'PUT')
                setError('')
                const destination = location?.state?.from || '/';
                navigation(destination)
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // onAuthStateChange signin and signup state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    }, [auth]) 

    // create user with email and password
    const registerWithEmailAndPassword = (email, password, name, navigation) => {
        setIsLoading(true)
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // const user = result.user;
            // console.log(user)
            const newUser = {email, displayName: name}
            setUser(newUser)
            saveUserTodb(email, name, 'POST')
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
              }).catch((error) => {
                  setError(error.message)
              });
            navigation('/')
            setError('')
        })
        .catch((error) => {
           setError(error.message)
        }).finally(() => setIsLoading(false))
    }

    // login with email and password 
    const loginWithEmailAndPassword = (email, password, navigation, location) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setUser(user)
            setError('')
            const destination = location?.state?.from || '/';
            navigation(destination)
        })
        .catch((error) => {
            setError(error.message)
        });
    }
    // sign out process
    const signOutProcess = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
              setError(error.message)
          }).finally(() => setIsLoading(false))
    } 

    // all user data insert and update in database 
    const saveUserTodb = (email, name, method) => {
        const user = {email, name}
        const url = `https://secret-depths-81352.herokuapp.com/users`
        fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

            })
    }

    // load admin 
    useEffect(() => {
        const url = `https://secret-depths-81352.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    return{
        user,
        error,
        isLoading,
        admin,
        signInUsingGoogle,
        signOutProcess, 
        registerWithEmailAndPassword,
        loginWithEmailAndPassword
    }
}

export default UseFirebase;