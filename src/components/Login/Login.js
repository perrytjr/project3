import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const [useractivites, setUserActivities] = useState("");
  const [userpicture, setUserPicture] = useState("");
  // console.log(props);
  // let history = useHistory();
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
            type="text"
            id="picture"
            label="Picture"
            placeholder="Picture URL"
            variant="outlined"
            onChange={(event) => setUserPicture(event.target.value)}
          />
        </div>

        <Link
          to={`/flick?name=${username}&age=${userage}&activities=${useractivites}&picture=${userpicture}`}
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
