import React,{ useState, useContext, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from './context/auth/authState';
import AuthContext from "./context/auth/authContext";
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import landing from './components/Landing';
import Mainpage from './components/MainPage'

const App= props => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={landing} />
          <Route exact path="/signup" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/application" component={Mainpage} />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
