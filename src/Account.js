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