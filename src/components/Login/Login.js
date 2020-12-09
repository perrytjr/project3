import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
    //Registration State:
    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setPassword] = useState("");
    const [registerUserage, setRegisterUserAge] = useState("");
    const [registerUserActivities, setUserActivities] = useState("");
    const [userPicture, setUserPicture] = useState("");
  
    //Login State:
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [data, setData] = useState(null)

    //routes:
    const register = () =>{
      axios({
        method: "POST",
        data: {
          username: loginUserName,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then
        (res => console.log(res));
    }

    const login = () => {
      axios({
        method: "POST",
        data: {
          username: registerUserName,
          password: registerPassword
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then
        (res => console.log(res));
    }

    const getUser = () => {
      axios({
        method: "GET",
        data: {
          username: registerUserName,
          password: registerPassword
        },
        withCredentials: true,
        url: "http://localhost:4000/user",
      }).then
        (res => setData(res.data));
    }

  return (
    <div>
      <h1 className="loginH1">SoleMate</h1>

      <br />

      <h2 className="h2">Registration:</h2>

      <form className="loginForm" noValidate autoComplete="off">
        <div className="inputField">
          <input
            className="input"
            type="text"
            id="fullName"
            label="Full Name"
            placeholder="Full Name"
            variant="outlined"
            onChange={(event) => setRegisterUserName(event.target.value)}
          />
        </div>

        <div className="inputField">
          <input
            className="input"
            type="password"
            id="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="inputField">
          <input
            className="input"
            type="text"
            id="age"
            label="Age"
            placeholder="Age"
            variant="outlined"
            onChange={(event) => setRegisterUserAge(event.target.value)}
          />
        </div>

        <div className="inputField">
          <input
            className="input"
            type="text"
            id="activites"
            label="Activities"
            placeholder="Activities"
            variant="outlined"
            onChange={(event) => setUserActivities(event.target.value)}
          />
        </div>

        <div className="inputField">
          <input
            className="input"
            type="text"
            id="picture"
            label="Picture"
            placeholder="Picture URL"
            variant="outlined"
            onChange={(event) => setUserPicture(event.target.value)}
          />
        </div>

        <Link
          to={`/flick?name=${registerUserName}&age=${registerUserage}&activities=${registerUserActivities}&picture=${userPicture}`}
        >
          <div className="submitButton">
            <Button
              className="btn"
              type="text"
              variant="contained"
              color="primary"
            >
              Enter
            </Button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default withRouter(Login);
