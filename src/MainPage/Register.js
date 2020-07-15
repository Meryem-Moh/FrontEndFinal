import React, { Component } from 'react';
import {ListGroup
} from 'reactstrap';

import { Box, Flex } from 'rebass';
import { NavLink } from 'react-router-dom';
import Opening from '../images/Opening.jfif';
import R from '../images/R.jfif';


export default class Register extends Component{
constructor(){
  super();
  this.state={ 
    username : '',
    password : '',
    authority : '',
    firstName : '',
    lastName : '',
    ssn : '',
    email : '',
    phone : '',
    address : '',
    city : '',
    state : '',
    zip : '',
    myResponse:''
  }
  this.Cancel = this.Cancel.bind(this);
}
handleChange = event =>{
  this.setState({ [event.target.name]:event.target.value })
}
handleSubmit = event =>{
  event.preventDefault();
  const url ='http://localhost:8080/register'
  const data = {
    username:this.state.username,
    password:this.state.password,
    authority:'USER',
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    ssn:this.state.ssn,
    email:this.state.email,
    phone:this.state.phone,
    address:this.state.address,
    city:this.state.city,
    state:this.state.state,
    zip:this.state.zip
  }
fetch(url, { 
    method: 'POST',
    body: JSON.stringify(data),
    headers:{ 
      //'Access-Control-Allow-Origin: *'
      'Content-Type': 'application/json' 
     // 'Content-Type': 'no-core'
    } 
  })
  .then(body => body.json())
  .then((body) => {
    console.log('status '+JSON.stringify(body))
    const c = JSON.stringify(body);
    this.setState({
      myResponse:c
    })
  });
  this.Cancel();
}
Cancel() {
  this.props.history.push("");
}
render(){
  return(

    <div>
      <div>
      <NavLink className = 'card' to="/ContactUs">ContactUs</NavLink>
               <NavLink className = 'card' to="/About">About</NavLink>
              <NavLink className = "card" exact to="/">Home</NavLink>
      </div>
        <form onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <ListGroup className = 'card'>
            <input className = 'input' type='text' placeholder = 'First Name' name='firstName' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'Last Name' name='lastName' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'ssn' name='ssn' onChange={this.handleChange} />
            <input className = 'input' type='email' placeholder = 'email' name='email' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'phone' name='phone' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'address' name='address' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'city' name='city' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'state' name='state' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'zip' name='zip' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'username' name='username' onChange={this.handleChange} />
            <input className = 'input' type='text' placeholder = 'password' name='password' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Register' /> 
            <button className = 'button' onClick={this.Cancel}>
              Cancel
            </button>
          </ListGroup>
          <p className = 'summary'> ... {this.state.myResponse}</p>
        </form> 
    </div>
    
     
     
  )}
}