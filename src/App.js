import React, { Component } from "react";
import firebase from "firebase";

import "./App.css";

class App extends Component {
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} Ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Pseudogram</h2>
        </header>
        <p className="App-intro">
          <button onClick={this.handleAuth}>Login con Google</button>
        </p>
      </div>
    );
  }
}
export default App;
