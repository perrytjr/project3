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

