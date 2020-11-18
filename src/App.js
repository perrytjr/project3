// import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Wrapper>
        <Route exact path ="/" component={Login} />
        <Route exact path ="/Login" component={Login} />
        <Route exact path ="/Home" component={Home} />
      </Wrapper>
    </div>
  </Router>
    )
}

export default App;


