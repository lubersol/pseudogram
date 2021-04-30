import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

firebase.initializeApp({
  apiKey: "AIzaSyBK0d7blp81pIWIVnv0P6yetiJKHZiVAAE",
  authDomain: "pseudogram-584b5.firebaseapp.com",
  projectId: "pseudogram-584b5",
  storageBucket: "pseudogram-584b5.appspot.com",
  messagingSenderId: "777607774696",
  appId: "1:777607774696:web:fe881a993c59df0434e45d",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
