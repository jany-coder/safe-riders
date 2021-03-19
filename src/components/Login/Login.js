import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import { Button } from '@material-ui/core';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }
     
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleFacebookSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <h1>{loggedInUser.displayName}</h1>
            <div>
                <Button variant="contained" color="secondary" onClick={handleGoogleSignIn}>Google Sign In</Button>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button variant="contained" color="primary" onClick={handleFacebookSignIn}>Facebook Sign In</Button>
            </div>
            
            
            
        </div>
    );
};

export default Login;