/*
For taking input from a guest user and saving it to table'guest'.

functions used:
addGuest()
loginUser()
validateForm()
handleSubmit()


*/


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import LoginGoogle from "./LoginGoogle";
import Axios from "axios";


export default function Guest({dataFromTabHeading}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const [emaillogin, setEmailLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const addGuest = () => {
    Axios.post("http://localhost:3001/createguest", {
      name: name,
      age: age,
      gender: gender,
      phone: phone,
      email: email,
      password: password,
    }).then((response) => {
      console.log("Guest success");
      console.log(response);
    });
  };
  


  const loginUser=()=>{
    Axios.post("http://localhost:3001/loginguest", {
      email: emaillogin,
      password: passwordlogin,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].name)
      }
      
    });
  }


  function validateForm() {
    return( 
      dataFromTabHeading? 
      email.length > 0 && password.length > 0
      :
      emaillogin.length > 0 && passwordlogin.length > 0);
  }

  function handleSubmit(event) {
    console.log("Submitted Guest")
    event.preventDefault();
  }

  return (
    <div className="Guest">
      <Form onSubmit={dataFromTabHeading?'':handleSubmit}>
        {dataFromTabHeading?
        <div>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            autoFocus
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            autoFocus
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone no.</Form.Label>
          <Form.Control 
            type="phonenumber"
            placeholder="Enter phone number"
            autoFocus
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        </div>
        :''}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoFocus
            value={dataFromTabHeading? email:emaillogin}
            onChange={(e) => dataFromTabHeading? 
              setEmail(e.target.value): 
              setEmailLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={dataFromTabHeading? password:passwordlogin}
            onChange={(e) => dataFromTabHeading? 
              setPassword(e.target.value): 
              setPasswordLogin(e.target.value)}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={dataFromTabHeading?addGuest:loginUser} disabled={!validateForm()}>
          Submit
        </Button>
        <h4 className="mt-2">OR</h4>
        <div className="login">
        <LoginGoogle/>
        </div>    
      </Form>
      <br/>
      <h1>{loginStatus} </h1>
    </div>
  );
}
