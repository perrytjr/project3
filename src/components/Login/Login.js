import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import './Login.css';
import {  Link } from "react-router-dom";


function Login() {
    const [username, setUserName] = useState('');
    const [userage, setUserAge] = useState('');
    const [useractivites, setUserActivities] = useState('');
    const [userpicture, setUserPicture] = useState('');
    // console.log(props);
    // let history = useHistory();
    return (
        <div>
            <h1>Login to Toogedder</h1>
            <br />
            <form className="inputText" noValidate autoComplete="off">
                <TextField type="text" id="fullName" label="Full Name" variant="outlined" onChange={(event) => setUserName(event.target.value)} />
                <br/>

                <TextField  type="text" id="age" label="Age" variant="outlined" onChange={(event) => setUserAge(event.target.value)} />
                <br/>
                <TextField  type="text" id="activites" label="Activities" variant="outlined" onChange={(event) => setUserActivities(event.target.value)} />
                <br/>
                <TextField  type="text" id="picture" label="Picture" variant="outlined" onChange={(event) => setUserPicture(event.target.value)} />
                <br/>
                <Link to={`/flick?name=${username}&age=${userage}&activities=${useractivites}&picture=${userpicture}`}>
                <Button  type="text" variant="contained" color="primary">
                    Enter
                </Button>
                </Link>
            </form>

        </div>
    )
}


export default withRouter(Login);