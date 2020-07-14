import React from "react";


class User extends React.Component{
    constructor(props){
    super(props);
    this.state={
        "username": '',
        "password": '',
        "isActive": '',
        "roles": ''

    }

    }

/*
console.log("Tesst", localStorage.getItem("JWTToken"));
    fetch(url, {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "Authorization" : `Bearer ${ localStorage.getItem("JWTToken")}`
        
      },
    //  "body": JSON.stringify(),
    })
    .then(response => response.json())
  .then(response => {
    });




*/





    render() { 
        return (  
            <div>

            </div>
        );
    }
}
 
export default User;

































