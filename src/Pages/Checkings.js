import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
  } from 'reactstrap';


  
class Checkings extends Component {
  constructor(){
    super();
    this.state={ 
      id : '',
      balance : '',
      interestRate:''
     
    }
    this.Cancel = this.Cancel.bind(this);
    console.log("token", localStorage.getItem("JWTToken"))
  }
  handleChange = event =>{
    this.setState({ [event.target.name]:event.target.value })
  }

//handle Submit for Deposit/withdraw
  handleSubmit=(event, type )  =>{
    event.preventDefault();
    const url = `/Me/${type}`

    const data = {
    source:{
        id: this.state.id
    },
      balance: this.state.balance,
      
    }
  
  fetch(url, { 
      method: 'POST',
      body: JSON.stringify(data),
      headers:{ 
        'Content-Type': 'application/json' ,
        'Authorization': `Bearer ${ localStorage.getItem("JWTToken")}`
      } ,
     
    })

    .then(body =>{ 
    //  body.json()
      console.log("Body", body, body.status)
      return(body.status);
    })
    .then((body) => {
    //  console.log('status '+JSON.stringify(body))
     // const c = JSON.stringify(body);
      this.setState({
        myResponse:body
      })
     
    }).catch( error =>{
      console.log("Error", error)
    })
    

    .catch( error =>{
        console.log("Error", error)
      })
      
    //this.props.history.push("User");
   // window.location.replace("/Savings#")
   // this.Cancel();
  
  
  }
  


  handleSubmitID=(event, type )  =>{
    event.preventDefault();
    const url = `/Me/${type}`

    const data = {
    source:{
        id: this.state.id
    },
      balance: this.state.balance,
      
    }
 
//Get
    fetch(url, { 
      method: 'GET',
     // body: JSON.stringify(data),
      headers:{ 
        'Content-Type': 'application/json' ,
        'Authorization': `Bearer ${ localStorage.getItem("JWTToken")}`
      } ,
     
    })
    .then(response => response.json())
    .then(response => {
      //check if we get a 200 ok status
      console.log('status '+JSON.stringify(response))
      localStorage.setItem('ID', response.id);
      console.log("ID",response.id)
      console.log("Balance", response.balance)
    let bal =  JSON.stringify(response.balance);
    console.log("Its", bal);


    this.setState({
      balance: bal
    })


    })
  
    
    .catch( error =>{
        console.log("Error", error)
      })
      
    //this.props.history.push("User");
   // window.location.replace("/Savings#")
   // this.Cancel();
  
  
  }

 
// <span > <p>{ this.state.balance}</p>  </span> 

  Cancel() {
   // this.props.history.push("");
  }
 
  render() {
    return (
     <div>
      
      <h2>My Personal Checking Account</h2>
        <div>
        <form onSubmit={(event) => this.handleSubmit(event,"Withdraw")}>
          <h3>Withdrawal </h3>
          <ListGroup className = 'card'>
          <input className = 'input' type='number' placeholder = 'AccountId' name='id' onChange={this.handleChange} />
            <input className = 'input' type='number' placeholder = 'Amount ' name='balance' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Submit Withdraw' /> 
            </ListGroup>
          <p className = 'summary'>  {this.state.myResponse === 200 ? "***" : null}</p>
        </form> 
        </div>

        <div>
      <form onSubmit={(event) => this.handleSubmit(event,"Deposit")}>
          <h3>Deposit </h3>
          <ListGroup className = 'card'>
          <input className = 'input' type='number' placeholder = 'AccountId' name='id' onChange={this.handleChange} />
            <input className = 'input' type='number' placeholder = 'Amount ' name='balance' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Submit' /> 
            </ListGroup>
          <p className = 'summary'>  {this.state.myResponse === 200 ? "***" : null}</p>
        </form> 
        </div>


      <div>
        <form onSubmit={(event) => this.handleSubmitID(event,"PersonalCheckingAccounts")}>
          <h3>Your Balance </h3>
          <ListGroup className = 'card'>
              
        
          <input className = 'input' type='number' placeholder = {this.state.balance} name='' onChange={this.handleChange}/> 
          <input className = 'button' type='submit' value='Check' onclick="handleSubmitID"/> 
            
            </ListGroup>
          <p className = 'summary'>  {this.state.myResponse === 200 ? "Your Avilable Balance" : null}</p>
        </form> 
        </div>




     </div>
    );
  }
}

export default Checkings;


/*

<div>
      <form onSubmit={(event) => this.handleSubmit(event,"PersonalCheckingAccounts")}>
          <h3>Create Checking  </h3>
          <ListGroup className = 'card'>
            <input className = 'input' type='number' placeholder = 'Balance' name='id' onChange={this.handleChange} />
            <input className = 'input' type='number' placeholder = "1.0" step="0.01" min="0" max="10" name='balance' onChange={this.handleChange} />
            <input className = 'button' type='submit' value='Create' /> 
            </ListGroup>
          <p className = 'summary'>  {this.state.myResponse === 200 ? "Deposited Succesfully" : null}</p>
        </form> 
        </div>

*/