import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { withRouter, Redirect } from "react-router-dom";
import { ProfileContext } from "../../ProfileContext";
import "./Login.css";

function Login(props) {
  const { dispatch } = useContext(ProfileContext);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userActivities, setUserActivities] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return (
      <Redirect to='/flick'></Redirect>
    );
  }

  const handleOnClick = (e) => {
    e.preventDefault();

    let action = {
      name: userName,
      age: userAge,
      picture: userPicture,
      activities: userActivities,
      type: 'ADD_USER'
    };
    dispatch(action);
    setRegistered(true);
  };

  

  return (
    <div>
      <h1 className="loginH1">SoleMate</h1>

      <br />

      <form className="loginForm" noValidate autoComplete="off">
        <div className="inputField">
          <input
            className="input"
            type="text"
            id="fullName"
            label="Full Name"
            placeholder="Full Name"
            variant="outlined"
            onChange={(event) => setUserName(event.target.value)}
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
            onChange={(event) => setUserAge(event.target.value)}
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
            type="input"
            id="picture"
            label="Picture"
            placeholder="Picture URL"
            variant="outlined"
           onChange=  {(event) => setUserPicture(event.target.value)}
          />
        </div>

        <div className="submitButton">
          <Button
            onClick={handleOnClick}
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
  );
}

export default withRouter(Login);
