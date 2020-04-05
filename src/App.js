import React from 'react';
import './components/App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Home from './components/Home'


function App() {
  return (
    <Router>
    <Switch>
      {/* <div>{this.state.user ? <Home /> : <Login />}</div> */}

      <Route exact path="/" component={Welcome} />
      <Route exact path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
