/*
The topmost parent component bringing all the child components together
*/

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
import "../node_modules/rc-tabs/assets/index.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

class App extends Component {
  render(){
  return (
    <div className="App text-center ">
      <Router className="">
        <div className="m-2">
          <Button variant="outline-info" size="lg">
            <Link className="sign" to="/">
              Sign In
            </Link>
          </Button>
          <Button variant="outline-info" size="lg">
            <Link className="sign" to="/signup">
              Sign Up
            </Link>
          </Button>
        </div>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
