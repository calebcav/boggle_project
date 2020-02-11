import React from 'react';
import firebase from 'firebase';

function LoginButton({setUser}) {
    function login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result.user);
            setUser(result.user);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <button class="button center" onClick={() => login()}>
            Login
        </button>
    );
}


export default LoginButton;