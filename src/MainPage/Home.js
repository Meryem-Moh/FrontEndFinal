

import React, { Component } from 'react';
import {ListGroup} from 'reactstrap';
import { Button, Flex, Box } from 'rebass';

import Merit from '../images/Merit.jpg';




export default class Home extends Component{
constructor(){
  super();
  this.state={ 
    username:'', 
    password:''
  }
  this.register = this.register.bind(this);
}
handleChange = event =>{
  this.setState({ [event.target.name]:event.target.value })
}
handleSubmit = event =>{
  event.preventDefault();
  const url ='/authenticate'
  const data = {
    username:this.state.username,
    password:this.state.password
  }

  fetch(url, {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify(data),
})
.then(response => response.json())
.then(response => {
  //check if we get a 200 ok status
  console.log('status '+JSON.stringify(response))
  localStorage.setItem('JWTToken', response.jwt);
  console.log("Token",response.jwt)
/*
//for ID
  localStorage.setItem('ID', response.id);
  console.log("ID",response.id)
*/
  this.props.history.push("User");

  if(response.ok){
    console.log("Inside Ok")
    let str = JSON.stringify(response);
  const token = str.slice(8,-2);
  localStorage.setItem('JWTToken', token);
  
  }
  //const jwtToken = JSON.stringify(response);
 
})
.catch(err => {
  console.log(err);
});
}
register() {
  this.props.history.push("Register");
}
render(){
  return(

    
    <div>
      <p><strong></strong></p>
      <img src={Merit}></img>
  
      <form onSubmit={this.handleSubmit}>
        <h5>LogIn </h5>
        <ListGroup className = 'card'>
            <input className = 'input' type='text' placeholder = 'username' name='username' onChange={this.handleChange} />
            <input className = 'input' type='password' placeholder = 'password' name='password' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Log In' />
            <button className = 'button' onClick={this.register}>
             Open an Account
            </button>
        </ListGroup>
      </form>


      <div className="col-auto">
              <h5>© Copyright 2020 Merit Bank Services</h5>
          </div>
    </div>
  )}
}










/*
import React, { Component } from "react";
import { Button, Flex, Box } from 'rebass';
import { Card } from "reactstrap";

import Header from '../HeaderComponent';
import {ListGroup} from 'reactstrap';
//import { Box, Flex } from 'rebass'


//Login Page
class Home extends Component 
{
  constructor(){
    super();
    this.state={ 
      username:'', 
      password:''
    }
    this.register = this.register.bind(this);

  }

  handleChange = event =>{
    this.setState({ [event.target.name]:event.target.value })
  }
  handleSubmit = event =>{
    event.preventDefault();
    const url ='http://localhost:9090/authenticate'
    const data = {
      username:this.state.username,
      password:this.state.password
    }
    fetch(url, {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => {
    //check if we get a 200 ok status
    console.log('status '+JSON.stringify(response))
    if(response.ok){
    }
    //const jwtToken = JSON.stringify(response);
    let str = JSON.stringify(response);
    const token = str.slice(8,-2);
    localStorage.setItem('JWTToken', token);
    //this.props.history.push("User");
    window.location.replace("User")
  })
  .catch(err => {
    console.log(err);
  });
  }
  register() {
    this.props.history.push("Register");
  }

  

  render() 
  {
    return(

    <div>
     


  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
    <Box
      sx={{
        display: 'grid',
        flex: 1,
        minHeight: '100vh',
        gridTemplateAreas: [
          '"long-box long-box" "left-box right-box" "wide-box wide-box"',
          '"long-box long-box left-box right-box" "long-box long-box wide-box wide-box"'
        ],
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(4, 1fr)'
        ],
        gridTemplateRows: [
          '2fr 1fr 1fr',
          'none'
        ],
        gridGap: 20,
        margin: 20
      }}>
      <Box
        sx={{
          flex: 1,
          gridArea: 'long-box'
        }}>
        Long Box
      </Box>
      <Box
        sx={{
          flex: 1,
          gridArea: 'left-box'
        }}>
        Box Left
      </Box>
      <Box
        sx={{
          flex: 1,
          gridArea: 'right-box'
        }}>
        Box Right
      </Box>
      <Box
        sx={{
          flex: 1,
          gridArea: 'wide-box'
        }}>
      

      <form onSubmit={this.handleSubmit}>
        <ListGroup className = 'card'>
            <input className = 'input' type='text' placeholder = 'username' name='username' onChange={this.handleChange} />
            <input className = 'input' type='password' placeholder = 'password' name='password' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Log In' />
            <button className = 'button' onClick={this.register}>
              Register
            </button>
        </ListGroup>
      </form>
      </Box>
    </Box>
  </Flex>
    </div>
    )
}

}

export default Home;

*/