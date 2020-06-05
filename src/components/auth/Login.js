import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import Hoc from "../../containers/Hoc"
const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, error } = authContext;

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/application");
    }
    console.log(error);
  }, [isAuthenticated, props.history, error]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const { username, password } = user;

  const onSubmit = e => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please complete all fields");
    } else {
      login({
        username,
        password
      });
    }
  };

  return (
    <Hoc>
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
          name="username"
          className="input-field"
          placeholder="username"
          type="text"
          value={username}
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
    </Hoc>
  );
};
export default Login;
