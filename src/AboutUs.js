
import React from "react";
import Header from "./components/Header";
import { ReactComponent as about } from './images/About.jpg';

import * as ReactBootStrap from "react-bootstrap";

import About from './images/About.jpg';

const AboutUs= ()=>{


    const year = new Date().getFullYear();

return (
    <div>

        
        <h1 >We are here to serve you! </h1>

        <header>
      <ReactBootStrap.Navbar  collapseOnSelect  expand="lg" bg="dark" variant="dark"
      >
     <ReactBootStrap.Navbar.Brand js-scroll-trigger a href="/account">
          Merit Bank
     </ReactBootStrap.Navbar.Brand>

     <ReactBootStrap.Nav.Link eventKey={2} a href="/">
              Logout
     </ReactBootStrap.Nav.Link>

        </ReactBootStrap.Navbar>
    </header>
      


        <body>
        
        <img src={About}></img>
            <section className="page-section" id="benefits">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Benefits</h2>
                    <h3 className="section-subheading text-muted">
                      <div class="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-university fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Online Banking</h4>
                    <p className="text-muted">
                      Can use from your smartphone and from your computer.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-laptop fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Easy to Use.</p>
                  </div>
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-lock fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Your information is safe.</p>
                  </div>
                </div>
              </div>
            </section>
          </body>

          <footer>
            <div className="container">
              <div className="row">
                {/*column 1*/}
                <div className="col">
                  <h4>Created By: </h4>
                  <ul className="list-unstyled">
                    <li>Merit America's Cohort Developers in 2020</li>
                  </ul>
                </div>
                {/*column 2*/}
                <div className="col">
                  <h4>Disclaimer:</h4>
                  <ul className="list-unstyled">
                    <li>This is not a real bank</li>
                    <li>Not FDIC insured</li>
                    <li>This is a group capstone for presentation purposes</li>
                  </ul>
                </div>
                {/*column 3*/}
                <div className="col">
                  <h4>Located In:</h4>
                  <ul className="list-unstyled">
                    <li>Dallas, TX</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/meritamerica">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/meritamerica.org/">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/school/meritamerica/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/wearemeritamerica/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm">
                  <p>
                    Copyright ⓒ {year} Merit Banking Services | All Rights
                    Reserved | Terms of Service | Privacy{" "}
                  </p>
                </div>
              </div>
            </div>
          </footer>
   
          
   
     </div>


);

}
export default AboutUs;