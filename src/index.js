import React from "react";
import Home from "./Home.js";
import Account from "./Account.js";
import DepositWithdraws from "./DepositWithdraws.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Register} from "./components/login/index";

import Checking from "./Checking.js";
import Savings from "./Savings.js";
import Personalchecking from "./PersonalCheckingAccounts.js";
import Dba from "./DBA.js";
import IRA from "./IRAAccounts.js";

//import Footer from "./Footer.js";
import Cd from "./Cd";
import Transfer from "./Transfer";
import AboutUs from "./AboutUs";
import reducer from "./components/depositwithdraw/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Footer from "./Footer.js";

// <Route path="/logout" component={LogoutComponent} />


//Here we create our store
//A store holds the whole state tree of the application
const store = createStore(reducer);

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     jwt: '',
  //   }
  //   this.login = this.login.bind(this);
  // }
  // login(data) {
  //   const url ='http://localhost:8080/authenticate'
  //   // change state, update jwt
  //   fetch(url, { 
  //     method: 'POST',
    
  //     headers:{ 
  //       'Content-Type': 'application/json'
  //     } ,
  //     "body": JSON.stringify(data),
  //   })
    

  //   .then(response => response.json())
  //   .then(response => {
  //     console.log('status '+ JSON.status)
  //      console.log('status '+ JSON.stringify(response))
  //     if(response.ok){
  //     }
  //     this.setState({
  //       jwt: JSON.stringify(response)

  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  render() {
    return (
      <BrowserRouter>
      
        <div className="App">
          <switch>
          <Route exact path="/"  component={Home}/> 
          <Route exact path="/account"  component={Account} />
          <Route exact path="/depositwithdraws" component={DepositWithdraws} />
          <Route exact path="/aboutUs" component={ AboutUs }/>
          <Route exact path="/register"  component={Register} />
          <Route exact path="/checking" component={Checking} />
          <Route exact path="/savings" component={Savings} />
          <Route exact path="/cd" component={Cd} />
          <Route exact path="/transfer" component={Transfer} />
          <Route exact path="/personalchecking" component={Personalchecking} />
          <Route exact path="/dba" component={Dba} />
          <Route exact path="/personalchecking" component={Personalchecking} />
          <Route exact path="/ira" component={IRA} />
          </switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
