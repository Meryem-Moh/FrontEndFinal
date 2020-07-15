import React, { Component } from "react";
import { Button, Flex, Box } from 'rebass';
import { Card } from "reactstrap";
//import Footer from '../Footer';

function ContactUs ()
{
  
  
    return(
      <div>
          <div>
        <h2><center>Please Contact us:</center></h2>
        </div>
        
      <div className="container">
      <div className="row justify-content-center">             
          <div className="col-4 offset-1 col-sm-2">
              <h4>Info</h4>
              <ul className="list-unstyled">
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">About</a></li>
               
              </ul>
          </div>
          <div className="col-7 col-sm-5">
              <h4>Our Address</h4>
              <address>
                1222 Dalls Pkwy,<br />
                Plano<br />
                Texas<br />
                <i className="fa fa-phone fa-lg"></i>: +1 469 1234 5678<br />
                <i className="fa fa-fax fa-lg"></i>: +1 469  8765 4321<br />
                <i className="fa fa-envelope fa-lg"></i>: <a href="meritbankservices@bank.net">
                   meritbank@services.net</a>
              </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                 
                  <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                  <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                  <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                 
                 
              </div>
          </div>
      </div>
      <div className="row justify-content-center">             
          <div className="col-auto">
              <h4>© Copyright 2020 Merit Bank Services</h4>
          </div>
      </div>
  </div>
  </div>
      
      
    )
}



export default ContactUs;


//<div>Contact Us </div>