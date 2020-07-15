


import React, { Component } from "react";
import Checkings from '../Pages/Checkings';
import Savings from '../Pages/Savings';
import PersonalCheckings from '../Pages/PersonalCheckings';
import DBA from '../Pages/DBA';
import CD from '../Pages/CD';
import IRA from '../Pages/IRA';
import RothIRA from '../Pages/RothIRA';
import Transfer from "../Pages/Transfer";
import { Button, Flex, Box } from 'rebass'

import { Card } from "reactstrap";
class User extends Component 
{
  constructor()
  {
    super();
    this.state={ 
      firstName:"",
      lastName:"",
      fetchedData:[],
      CheckingsPage: false,
      SavingsPage: false,
      PersonalCheckingsPage: false,
      DBAPage: false,
      CDPage: false,
      IRAPage: false,
      RothIRAPage: false,
      TransferPage: false
    }
    this.hideComponent = this.hideComponent.bind(this);
  }
  // /*
  // componentWillMount(){
  //   const token ='Bearer ' + localStorage.getItem('JWTToken');
  //   const url = 'http://localhost:9090/User';
  //   fetch(url, { 
  //     method: 'GET',
  //     headers:{ 
  //       //'Access-Control-Allow-Origin: *'
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     }
  //   })
  //   .then(body => body.json())
  //   .then((bodyData) => {
  //     this.setState({
  //       firstName:bodyData.firstName,
  //       lastName:bodyData.lastName
  //     });
  //     console.log('user initialized');
  //   });
  // }
  // 
  hideComponent(name) {
    this.setState({
      CheckingsPage: false,
      SavingsPage: false,
      PersonalCheckingsPage: false,
      DBAPage: false,
      CDPage: false,
      IRAPage: false,
      RothIRAPage: false,
      TransferPage: false
    });
    switch (name) {
      case "CheckingsPage":
        this.setState({ CheckingsPage: !this.state.CheckingsPage });
        break;
      case "SavingsPage":
        this.setState({ SavingsPage: !this.state.SavingsPage });
        break;
      case "PersonalCheckingsPage":
        this.setState({ PersonalCheckingsPage: !this.state.PersonalCheckingsPage });
        break;
      case "DBAPage":
        this.setState({ DBAPage: !this.state.DBAPage });
        break;
      case "CDPage":
        this.setState({ CDPage: !this.state.CDPage });
        break;
      case "IRAPage":
        this.setState({ IRAPage: !this.state.IRAPage });
        break;
      case "RothIRAPage":
        this.setState({ RothIRAPage: !this.state.RothIRAPage });
        break;
      case "TransferPage":
        this.setState({ TransferPage: !this.state.TransferPage });
        break;
      //default:
        //null;
    }
  }
  render() 
  {
    const { CheckingsPage, SavingsPage, PersonalCheckingsPage, DBAPage, CDPage, IRAPage,RothIRAPage, TransferPage} = this.state;
    const logoutUrl = "http://localhost:3000/#/";
    const transferUrl = "http://localhost:3000/#/Transfer";
    const url = "";
    return (
      <div>
       <h1>Banking The Way You Like It </h1>
  
      <Flex
        sx={{
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            flexBasis: 256
    }}>


    <button className = 'button' onClick={() => this.hideComponent("SavingsPage")} > Savings Account</button>
    <button className = 'button' onClick={() => this.hideComponent("CheckingsPage")}>Personal Checking Account</button>
    <button className = 'button' onClick={() => this.hideComponent("DBAPage")}>DBA-Checking Account</button>
    <button className = 'button' onClick={() => this.hideComponent("CDPage")}> CD Account</button>
    <button className = 'button' onClick={() => this.hideComponent("IRAPage")}>Standard IRA Accounts</button>
    <button className = 'button' onClick={() => this.hideComponent("RothIRAPage")}>RothIRA Accounts</button>
   
    
   
    <a href={logoutUrl} className = "logoutBtn">
      <p>
        <button className = 'button' >LogOut</button>
      </p>
    </a>
  </Box>
  <Box
    sx={{
      p: 3,
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: 320
    }}>
            {CheckingsPage && <Checkings />}
            {SavingsPage && <Savings />}
            {PersonalCheckingsPage && <PersonalCheckings />}
            {DBAPage && <DBA />}
            {CDPage && <CD />}
            {IRAPage && <IRA />}
            {RothIRAPage && <RothIRA/>}
            {TransferPage && <Transfer />}
  </Box>
</Flex>
</div>
    );
  }
}


export default User;

// <button className = 'button' onClick={() => this.hideComponent("TransferPage")}>Transaction</button>
// <button className = 'button' onClick={() => this.hideComponent("PersonalCheckingsPage")}>Settings</button>