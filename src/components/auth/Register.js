import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import AuthState from "../../context/auth/authState";
import './style.css';


const Register = props => {

  const authContext = useContext(AuthContext);
  const {register, login, error, isAuthenticated} = authContext;

  useEffect(()=> {
      if(isAuthenticated){
          props.history.push('/home');
      }
      console.log(error);
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
      e.preventDefault();
      if(username === "" || email === "" || password === "" || password2 === ""){
          alert("Please fill the required Information !!");
      }else if(password !== password2){
          alert('password not matched');   
    }else{
          console.log('Calling Registration !');
          register({
              username, email, password
          })
      }
  };

  return (
    <div className="form-container w3-card">
      <h1>
        Account  <span style={{color:"red"}}>  Register</span>
      </h1>

      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="Username"
          className="input-field"
          type="text"
          value={username}
          onChange={onChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="input-field"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          className="input-field"
          type="text"
          value={password}
          onChange={onChange}
          required
          minLength="6"
        />
        <input
          name="password2"
          placeholder="Cofirm Password"
          className="input-field"
          type="text"
          value={password2}
          onChange={onChange}
          required
          minLength="6"
        />

        <input
          name="Register"
          type="submit"
          style={{marginTop : "1rem"}}      
          className="btn btn-block btn-danger"
        />
      </form>
    </div>
  );
};
export default Register;
