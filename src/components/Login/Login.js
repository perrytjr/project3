import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./Login.css";



function Login(props) {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const [useractivities, setUserActivities] = useState("");
  const [userpicture, setUserPicture] = useState("");
  const [registered, setRegistered] = useState(false);
  
  if (registered) {
    return <Redirect to = {{ pathname: `/flick?name=${username}&age=${userage}&activities=${useractivities}&picture=${userpicture}` }} />;
  }

 const  handleOnClick = (e) => {
  e.preventDefault(); 
  debugger; 
  
    props.profileUpdate(username, userage, useractivities, userpicture);
    setTimeout(() => setRegistered(true), 500);
  }

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

        {/* <Link
          to={`/flick?name=${username}&age=${userage}&activities=${useractivites}&picture=${userpicture}`}
        > */}
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
        {/* </Link> */}
      </form>
    </div>
  );
}

export default withRouter(Login);

// class Login extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//             fullName: '',
//             age: '',
//             activites: '',
//             picture: ''
//         }
//     }

//     addUser = (e) => {
//         this.setState({ fullName: e.target.value})
//         this.setState({age: e.target.value})
//         this.setState({activites: e.target.value})
//         this.setState({picture: e.target.value})
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Login to Toogedder</h1>
//                 <br />
//                 <form className="inputText" noValidate autoComplete="off">
//                     <TextField type="text" id="fullName" label="Full Name" variant="outlined" onChange={this.addUser} />
//                     <br/>
    
//                     <TextField  type="text" id="age" label="Age" variant="outlined" onChange={this.addUser} />
//                     <br/>
//                     <TextField  type="text" id="activites" label="Activities" variant="outlined" onChange={this.addUser} />
//                     <br/>
//                     <TextField  type="text" id="picture" label="Picture" variant="outlined" onChange={this.addUser} />
//                     <br/>
//                     <Link to='/flick'>
//                     <Button  type="text" variant="contained" color="primary">
//                         Enter
//                     </Button>
//                     </Link>
//                 </form>
    
//             </div>
//         )

//     }
// }
// export default withRouter(Login);
