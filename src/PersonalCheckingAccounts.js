import React, { Component } from "react";

import { Button, Flex, Box } from 'rebass';

import { Card } from "reactstrap";








class Account extends Component 
{
  constructor()
  {
    super();
    this.state={ 

     
    }
    
  }

  
  render(

  ) 
  {
    return(
     
        <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '100vh'
          }}>
          <Box>Welcome</Box>
          <Flex
            sx={{
              flex: 1,
              flexDirection: [
                'column',
                'row'
              ]
            }}>
            <Box
              sx={{
                flex: 1,
                minWidth: 0
              }}>
              Main Content
            </Box>
            <Box
              sx={{
                flexBasis: [
                  'auto',
                  64
                ],
                order: -1
              }}>
              Nav
            </Box>
            <Box
              sx={{
                flexBasis: [
                  'auto',
                  64
                ]
              }}>
              Ads
            </Box>
          </Flex>
          <Box>Footer</Box>
        </Flex>


    )
    
}

}

export default Account;







































/*
import React,{useEffect} from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";

const Account= ()=>{


  const url ="http://localhost:9090/Me";

// Goes to AccoutHolder class
  useEffect(() => {
    // Update the document title using the browser API
    console.log("Tesst", localStorage.getItem("JWTToken"));
    fetch(url, {
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "Authorization" : `Bearer ${ localStorage.getItem("JWTToken")}`
        
      },
    //  "body": JSON.stringify(),
    })
    .then(response => response.json())
  .then(response => {
    });

   // window.localStorage.getItem('username');


  },[]
  );

  
  

 
    return (
      <div>
        <Header />
       
       
        <h1>Account Information </h1>
        <center>
          <i class="fa fa-comments fa-5x" />
        </center>
        <div class="col-xs-6">
       
          <h2>Welcome </h2>
         
        </div>
        
      </div>
    );
  }

export default Account;
*/

