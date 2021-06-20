import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCDoeY_OPEmje0hYhb_9yNbTbNFB882Yhc",
    authDomain: "chat-app-7804e.firebaseapp.com",
    projectId: "chat-app-7804e",
    storageBucket: "chat-app-7804e.appspot.com",
    messagingSenderId: "312475671256",
    appId: "1:312475671256:web:216fd867818b69ef8fd5ad",
    measurementId: "G-0121KC8CJC"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
