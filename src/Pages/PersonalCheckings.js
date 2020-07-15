import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
  } from 'reactstrap';


  
class PersonalCheckings extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      checked: false,
      balance: 0
    };
  }
  
  render() {
    return (
     <div> testing PC </div>
    );
  }
}
export default PersonalCheckings;