import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from './context/auth/authState';
import Register from '../src/components/auth/Register';
import Login from '../src/components/auth/Login';
import Home from './components/landing/home'
function App() {
  return (
    <AuthProvider>
      <Router>

        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
