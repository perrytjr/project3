import React, { useState, Component} from 'react';
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