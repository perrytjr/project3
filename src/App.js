import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButton/SwipeButtons";
import Login from "./components/Login/Login";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import Chats from "./components/Chats/Chats";

function App() {



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <ChatHeader backButton={'/flick'} />
            <Chats/>
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
    </div>
  );
}

export default App;
