/*
For showing the sign in page which calls the TabHeading Component eventually calling the Guest and Admin component.
*/

import React, { Component } from "react";
import TabHeading from "./TabHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class SignIn extends Component {
  state = { 
    data : true
  }
  render(){
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <TabHeading dataFromSignIn = {this.state.data}/>
    </div>
  );
}
}
export default SignIn;