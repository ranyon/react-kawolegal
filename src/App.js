import HomePage from './components/Homepage';
import StartUps from './components/Startups/startups';
import Register from './components/Register/register';
import Login from './components/Login/login';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router >
      <Switch>
          <Route exact path = "/">
              <HomePage/>
          </Route>

          <Route path = "/startups">
              <StartUps/>
          </Route>


          <Route path = "/register">
              <Register/>
          </Route>

          <Route path = "/login">
              <Login/>
          </Route>
      </Switch>
   
    </Router>
  );
}

export default App;