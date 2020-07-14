import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={ 
      username:'admin', 
      password:'admin',
      jwt: ''
    }
  }
  handleChange = event =>{
    this.setState({ [event.target.name]:event.target.value })
  }
  handleSubmit = event =>{
    event.preventDefault();
     console.log('username: ' + this.state.username)
     console.log('password: ' + this.state.password)
  
     const url ="http://localhost:9090/authenticate"

    const data = {
      username:this.state.username,
      password:this.state.password
    }
    
   
    
    // this.props.history.push('account');
    
  // fetch(url, { 
  //     method: 'POST',
    
  //     headers:{ 
  //       'Content-Type': 'application/json'
  //     } ,
  //     "body": JSON.stringify(data),
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log('status '+ JSON.status)
  //     // console.log('status '+ JSON.stringify(response))
    
  //     if(response.ok){
  //     const jwt = JSON.stringify(response);
  //     localStorage.setItem('JwTToken', jwt)
  //  //   localStorage.getItem('JwTToken')
  //     }
  //     this.props.history.push("Account");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
   
  fetch(url, {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
      //"accept": "application/json"
    },
    "body": JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => {
    //check if we get a 200 ok status
    console.log('status '+ JSON.stringify(response))

    //if(response.ok){
      console.log("Test");
      this.setState({
        jwt: JSON.stringify(response)

      })
      const jwtToken = response.jwt;

      localStorage.setItem('JWTToken', jwtToken)
     // window.location.href= "/account";
     window.location.replace("/account")
   // }
   
    
   // this.props.history.push('/account');
    //this.context.history.push('/Account');
  })
  .catch(err => {
    console.log(err);
  });
   
}

  
 

  render(){
    return(
  
      <div>
        <div>
        <img
            className="img-fluid d-block mx-auto"
            src="https://github.com/lvdy7114/FrontEndCapstone/blob/master/meritbank/Capstone%20images/malogo.PNG?raw=true"
            alt=""
          />
          <h1><b>Welcome to Merit Online Banking!</b></h1>
        </div>
        <form  onSubmit={this.handleSubmit}>
          <ul>
            <input type='text' placeholder = 'username' name='username' onChange={this.handleChange} />
            <input type='password' placeholder = 'password' name='password' onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Login</button>
          </ul>
        
        </form> 
      </div>
      
     
      );
     
      }

    }
// <input type='submit' value='Log In' />
//
// <input type='submit' value='Log In' />
//  <p > {this.state.jwt } </p>


class Connect extends Component {
  render() {
    return (
      <div className="Connect">
        <Router>
          <>
            <Switch>
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route path="/accounts" component={AccountComponent} />
              <Route component={ErrorComponent} />
            </Switch>
          </>
        </Router>
        {/*<WelcomeComponent />
        <LoginComponent />*/}
      </div>
    );
  }
}


class AccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: []
    };
  }
  render() {
    return (
      <div>
        <a href="/logout">logout</a>
        <h4>Account Information</h4>
        <table>
          <thead>
            <tr>
              <p>
                <Link to="/checking">Checking Accounts</Link>
              </p>
              <p>
                <Link to="/savings">Savings Account</Link>
              </p>
              <p>
                <Link to="/cd">Certificate of Deposit Account (CD)</Link>
              </p>
              <Link to="/ira">Individual Retirement Accounts (IRA)</Link>
            </tr>
          </thead>
          <tbody>
            <tr />
          </tbody>
        </table>
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h4>You are logged out</h4>
        <p>See you soon.</p>
      </>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <Link to="/logout">logout</Link>
        <h4>Welcome!</h4>
        <div>
          {" "}
          Welcome {this.props.match.params.name}. Click here to view your
          Account Information <a href="/account">Go to my account</a>
        </div>
        <div className="container">
          <div>
            <table>
              <thead>
                <tr />
              </thead>
              <tbody>
                <tr />
              </tbody>
            </table>
          </div>
          This is here for testing
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button>
        </div>
      </>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred.</div>;
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: true
    };

    /*this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);*/
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  /* handleUsernameChange(event) {
    console.log(event.target.value);
    this.setState(
      { 
        [event.target.name] 
        :event.target.value
  }
    )
}

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }
*/
  loginClicked() {
    //hardedcoded authentication
    if (this.state.username === "meritbank" && this.state.password === "pass") {
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    //console.log(this.state)
  }

  render() {
    return (
      <div>
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div />}
        {/* <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}/>*/}
        <div className="col-sm-2 col-sm-2 center">
          <img
            className="img-fluid d-block mx-auto"
            src="https://github.com/lvdy7114/FrontEndCapstone/blob/master/meritbank/Capstone%20images/malogo.PNG?raw=true"
            alt=""
          />
          <p>Welcome to Merit Online Banking!</p>
        </div>

        <i class="fa fa-id-card fa-5x" />
        <h4>Please Sign-In:</h4>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}


export default Login;