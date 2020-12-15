//Marc's Code with Passport Authentication:
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { withRouter, Redirect } from "react-router-dom";
import { ProfileContext } from "../../ProfileContext";
import "./Login.css";
import axios from "axios";

//Registration State:
function Login(props) {
  const { dispatch } = useContext(ProfileContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userActivities, setUserActivities] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [registered, setRegistered] = useState(false);

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  if (registered) {
    return <Redirect to="/flick"></Redirect>;
  }


  //routes:
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUserName,
        password:loginPassword,
        age: userAge,
        picture: userPicture,
        activities: userActivities,
        type: "ADD_USER",
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
    dispatch(login.data);
    setRegistered(true);
  };

  return (
    <div className="app">
      <h1>SoleMate</h1>
      <h2>Registration:</h2>
      <form className="loginForm" noValidate autoComplete="off">
        <div className="inputField">
          <input
            className="input"
            type="text"
            id="fullNameReg"
            label="Full Name"
            placeholder="Full Name"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="passwordReg"
            label="password"
            placeholder="Password"
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setUserAge(e.target.value)}
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
            onChange={(e) => setUserActivities(e.target.value)}
          />
        </div>
        <div className="inputField">
          <input
            className="input"
            type="input"
            id="picture"
            label="Picture"
            placeholder="Picture URL"
            variant="outlined"
            onChange={(e) => setUserPicture(e.target.value)}
          />
        </div>

        <div className="submitButton">
          <Button
            onClick={register}
            className="btn"
            type="text"
            variant="contained"
            color="primary"
          >
            Enter
          </Button>
        </div>
      </form>

      <div>
        <h2>Sign In:</h2>
        <form className="loginForm" noValidate autoComplete="off">
          <div className="inputField">
            <input
              className="input"
              type="text"
              id="fullName"
              label="Full Name"
              placeholder="Full Name"
              variant="outlined"
              onChange={(e) => setLoginUserName(e.target.value)}
            />
          </div>

          <div className="inputField">
            <input
              className="input"
              type="password"
              id="password"
              label="password"
              placeholder="Password"
              variant="outlined"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <div className="submitButton">
            <Button
              onClick={login}
              className="btn"
              type="text"
              variant="contained"
              color="primary"
            >
              Enter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
