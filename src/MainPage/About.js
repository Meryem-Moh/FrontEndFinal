import React, { Component } from "react";
import { Button, Flex, Box } from 'rebass';
import { Card } from "reactstrap";


import image1 from '../images/Xavier.jfif';
import image2 from '../images/Meryem.jfif';
import image3 from '../images/Linda.jfif';
import image4 from '../images/Andreal.jfif';



class About extends Component 
{
  constructor()
  {
    super();
    this.state={ 
    }
    
  }

  render() 
  {
    return(
        <div>
          
      <section className="bg-light page-section" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                      Our Amazing Team
                    </h2>
                    <h2 className="section-subheading text-muted">
                      Merit America's Cohort Java Developers in 2020
                    </h2>
                  </div>
                </div>


                <div className="row">

                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/1.jpg"
                        alt=""
                      />
                      <h4>Xavier Harris</h4>
                      <div>
                      <img src={image1} />
                      </div>
                      <h5 className="text-muted">Team Lead/Java FullStack Developer</h5>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/tyrell0895/">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/xharrisjames">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      />
                      <h4>Andreal Harris</h4>
                      <div>
                      <img src={image4} />
                      </div>
                      <h5 className="text-muted">Java FullStack Developer </h5>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/Andreal485">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/andreal-harris">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      />
                      <h4>Meryem Mohammed</h4>
                      <div>
                      <img src={image2} />
                      </div>
                      <h5 className="text-muted">Java FullStack Developer</h5>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/Meryem-Moh">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/meryemmohammed">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/3.jpg"
                        alt=""
                      />
                      <h4>Linda Vadysirisack</h4>
                      <div>
                      <img src={image3} />
                      </div>
                      <h5 className="text-muted">Java FullStack Developer</h5>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/lvdy7114">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/lindavady/">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  

                </div>
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <h5 className="large text-muted">
                      Project administered using Agile methods via Jira. Created
                      with HTML, CSS, Bootstrap, Javascript, and React for the
                      frontend. Utilized Java, MySql, and the Spring Framework
                      for the backend.
                    </h5>
                  </div>
                </div>
              </div>
            </section>












        </div>
    )
}

}

export default About;
