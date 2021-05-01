import React, { Component } from "react";
import firebase from "firebase";

import FileUpload from './FileUpload';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //Añadir el objeto usuario al estado, cuando el usuario se loguee.
  //Metodo ciclo vida
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      //modifica el estado
      this.setState({
        user,
      });
    });
  }
  //Métoo del boton para loguearnos
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(`${result.user.email} Ha iniciado sesión`))
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
    .then((result) => console.log(`${result.user.email} Ha salido de la sesión`))
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  }
  renderLoginButton() {
    //Si el usuario está logueado
    if (this.state.user) {
      return (
        <div>
          <img
            src={this.state.user.photoURL}
            alt={this.state.user.displayName}
          />
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Logout</button>
          <FileUpload />
        </div>
      );
    } else {
      return(
      //No está logueado
      <button onClick={this.handleAuth}>Login con Google</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pseudogram</h2>
        </div>
        <p className="App-intro">{this.renderLoginButton()}</p>
      </div>
    );
  }
}
export default App;
