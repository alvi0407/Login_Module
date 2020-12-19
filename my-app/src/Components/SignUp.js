/*
For showing the sign up page which calls the TabHeading Component eventually calling the Guest and Admin component.
*/

import React,{Component} from "react";
import TabHeading from "./TabHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class SignUp extends Component {
  state = { 
    data : true
  }

  render(){
  return (
    <div>
      <h1>Sign Up</h1>
      <TabHeading  dataFromSignUp = {this.state.data}/>
    </div>
  );
}
}
export default SignUp;