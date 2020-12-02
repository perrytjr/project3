// //Marc's Code for Login:
// import React from 'react';
// import './App.css';
// import { observer } from 'mobx-react'
// import UserStore from './components/UserStore'
// import LoginForm from  './pages/LoginForm'
// import SubmitButton from './components/SubmitButton'

// class App extends React.Component {

//   async componentDidMount(){
//     try{
//       let res =  await fetch('/isLoggedIn', {
//         method: 'post',
//         headers:{
//           'Accept': 'application/json',
//           'Content-type': 'application/json'
//         }
//       });

//       let result = await res.json();
//       if(result && result.success){
//         UserStore.loading = false;
//         UserStore.isLoggedIn = true;
//         UserStore.username = result.username;
//       }else{
//         UserStore.loading = false;
//         UserStore.isLoggedIn = false;
//       }
//     }

//     catch(e){
//       UserStore.loading = false;
//       UserStore.isLoggedIn = false;
//     }
//   }

//   async doLogout(){
//     try{
//       let res =  await fetch('/logout', {
//         method: 'post',
//         headers:{
//           'Accept': 'application/json',
//           'Content-type': 'application/json'
//         }
//       });

//       let result = await res.json();
//       if(result && result.success){
//         UserStore.isLoggedIn = false;
//         UserStore.username = '';

//       }
//     }

//     catch(e){
//       console.log(e);
//     }
//   }


//   render(){

//     if(UserStore.loading){
//       return(
//         <div className="app">
//           <div className='container'>
//             Loading, Please Wait...
//           </div>
//         </div>
//       )
//     }else{

//       if(UserStore.isLoggedIn){
//         return(
//           <div className="app">
//             <div className='container'>
//               Welcome {UserStore.username}

//               <SubmitButton
//                 text={'Log Out'}
//                 disabled={false}
//                 onClick={()=> this.doLogout()}
//               />


//             </div>
//           </div>
//         )
//       }
//           return(
//       <div classname="app">
//         <div className='container'>
//           <LoginForm />
//         </div>
//       </div>
//     )
//     }


//   }
// }

// export default observer(App);

//David's Code:
import React,{ useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './components/SwipeButton/SwipeButtons';
import Login from './components/Login/Login';
import ChatHeader from './components/ChatHeader/ChatHeader';
import Chats from './components/Chats/Chats';




function App() {
  const [username] = useState('');
  const [userage] = useState('');
  const [useractivites] = useState('');
  const [userpicture] = useState('');
  

  // function handleClick() {
  //   debugger;
  //   let fullname = document.querySelector('#fullName').value,
  //   age = document.querySelector('#age').value,
  //   activities= document.querySelector('#activites').value;
    
  //   console.log(fullname)
  //   console.log(age)
  //   console.log(activities)
  //   setUser({fullname: fullname, age: age, activities: activities });

  //   history.push('/swipe');
    
  // }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <ChatHeader backButton={`/flick?name=${username}&age=${userage}&activities=${useractivites}&picture=${userpicture}`} />
            <Chats/>
          </Route>
          <Route path="/flick">
            <Header />
            <TinderCards  />
            <SwipeButtons />
          </Route>
          <Route path="/">
            <Login   />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

