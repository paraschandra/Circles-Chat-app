import React from 'react';
import "firebase/app";

import {auth} from "../firebase";
import firebase from 'firebase/app';

const Login = () => {
    return (
        <div id="login-page" style={{ 
            backgroundImage: "url(/back.svg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
            <h1>CIRCLES</h1>
            <div id="login-card">
                <div id="login">
                    <h2>Login</h2>
                </div>
                <div id="buttons">
                    <div 
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        Google
                    </div>
                    <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    >
                        Facebook
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;