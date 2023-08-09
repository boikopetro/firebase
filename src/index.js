import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCw7DC0dVXkZnjjndvWxECmAU0PtS3O8aE",
    authDomain: "chat-react-a19f9.firebaseapp.com",
    projectId: "chat-react-a19f9",
    storageBucket: "chat-react-a19f9.appspot.com",
    messagingSenderId: "597083995743",
    appId: "1:597083995743:web:db89f17e09c8cc75e965ea",
    measurementId: "G-MLTRJZHBMK"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{firebase, auth, firestore}}>
            <App />
        </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
