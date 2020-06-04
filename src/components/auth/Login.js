import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
    console.log(error);
  }, [isAuthenticated, props.history, error]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const { email, password } = user;

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please complete all fields");
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container w3-card">
      <h1>
        Account{" "}
        <span style={{color:"red"}} >
          {" "}
          Login{" "}
        </span>
      </h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          className="input-field"
          placeholder="Email"
          type="text"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          placeholder="Password"
          className="input-field"
          type="text"
          value={password}
          onChange={onChange}
        />

        <input
          name="Login"
          type="submit"
          className="input-field"
          style={{ marginTop: "1rem" }}
          className="btn btn-danger btn-block"
        />
      </form>
    </div>
  );
};
export default Login;
