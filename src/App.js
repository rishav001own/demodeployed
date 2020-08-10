import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Signup from './components/signup'

function App() {
  return (
      <Router>
      <Switch>
      <Route exact path="/" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home">
          <h1>Welcome to Homepage And sucessfully loggedIn</h1>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
