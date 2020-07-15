import React, { Component } from 'react';
import {
  Route
 
} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { NavLink} from "react-router-dom";



import Home from "./MainPage/Home";
import Register from "./MainPage/Register";
import User from "./MainPage/User";
import Admin from "./MainPage/Admin";
//import Transfer from "../MainPages/Transfer";
import About from "./MainPage/About";
import ContactUs from "./MainPage/ContactUs";

import './MainPage/style.css';
import { NavbarBrand } from 'reactstrap';

import {Nav, Navbar, NavDropdown, MenuItem,  Button, Table, ButtonGroup, Form, FormGroup, FormControl} from 'react-bootstrap'; 


class HeaderComponent extends Component {
    render() {
      return (
        <div>
          
          <div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#/">MeritBank</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#/ContactUs">Contact Us</Nav.Link>
                <Nav.Link href="#/About">About Us</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
            </div>   
    
        <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/ContactUs" component={ContactUs}/>
                <Route path="/Register" component={Register}/>
                <Route path="/User" component={User}/>
                <Route path="/Admin" component={Admin}/>
            </div>



        </div>
      
      );
    }
  }
 //<Route path="/Transfer" component={Transfer}/>
export default HeaderComponent;