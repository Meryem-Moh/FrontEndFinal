import React,{Component} from "react";

//import {sterilizeString} from "../sterilize";
import {Link} from 'react-router-dom';
//import Reg from './images/imgregister.jpg';


export class Register extends React.Component {

  
  
  constructor(props) {
    super(props);

   

    this.state={
      firstname: "First Name",
      lastname: "Last Name",
      email: "email@xyz.com",
      username: "User Name",
      password: "password"
    }

    
    this.submitFeedback = this.submitFeedback.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus = (event) => event.target.select();


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitFeedback(){

  



  }

  render() {
    const year = new Date().getFullYear();
    return (
      <>
     
        
      <div className="base-container" ref={this.props.containerRef}>

        
        <div className="header">Register</div>
        
        <div className="content">
          <div className="image" />
          <div className="form">
          <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
          
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div>
        <button class="submit" onClick={this.submitFeedback}>Register</button>
        </div>
        <div className="footer">
          
        </div>

        <div className="row">
                <div className="col-sm">
                  <p><b>
                    Copyright ⓒ {year} Merit Banking Services | All Rights
                    Reserved | Terms of Service | Privacy{" "}
                    </b></p>
                </div>
              </div>
           
      </div>
      </>
    );
  }
}
