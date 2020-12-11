import React, { useState } from "react";
import "./App.css";
import { produce } from "immer"
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButton/SwipeButtons";
import Login from "./components/Login/Login";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import Chats from "./components/Chats/Chats";
import { ProfileContext } from "./ProfileContext";
import defaultUsers from "./users";

import "./App.css";

function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const usersReducer = (users, action) => {
  switch(action.type) {
    case 'ADD_USER':
      // users.unshift({
      //   name: action.name,
      //   age: action.age,
      //   picture: action.picture,
      //   activities: action.activities
      // });
      users.push({
        name: action.name,
        age: action.age,
        picture: action.picture,
        activities: action.activities
      });

      // Make a call to DB to insert the new user
      console.log('usersReducer users: ', users);
      return;
    
    default:
      return users;
  }
}

export default function App() {
  const [users, dispatch] = useImmerReducer(usersReducer, defaultUsers);

  return (
    <div className="App">
      <ProfileContext.Provider
        value={{ users, dispatch }}
      >
        <Router>
          <Switch>
            <Route path="/chat">
              <ChatHeader
                // backButton={`/flick?name=${username}
                // &age=${userage}
                // &activities=${useractivities}
                // &picture=${userpicture}`}
              />
              <Chats />
            </Route>

            <Route path="/flick">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>

            <Route path="/">
              <div className="container">
                <Login />
              </div>
            </Route>
          </Switch>
        </Router>
      </ProfileContext.Provider>
    </div>
  );
}