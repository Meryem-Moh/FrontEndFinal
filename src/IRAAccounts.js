import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import Ira from './images/Ira.png';


const IRA =() =>{





      
      const url ="http://localhost:9090/ira";

    return(
    <div>
      <h1>Merit Banking Services</h1>
      <h2>IRA Accounts</h2>
      <form>
      <img src={Ira}></img>
      </form>
      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/account">
            Home
       </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/deposit">
           Click here to Open Regular IRA
            </ReactBootStrap.Nav.Link>

      <ReactBootStrap.Nav.Link js-scroll-trigger a href="/deposit">
           Click here to Open Rollover IRA
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger a href="/transfer">
            Click here to Open Roth IRA
            </ReactBootStrap.Nav.Link>
<br></br>
      <h3>Contact us for More Information</h3>
      <h6>Regular/ Traditional IRA is is a type of individual retirement account that lets your earnings grow tax-deferred. You pay taxes on your investment gains only when you make withdrawals in retirement.</h6>
      <h6> Rollover IRA  is an account that allows you to move funds from your old employer-sponsored retirement plan into an IRA. With an IRA rollover, you can preserve the tax-deferred status of your retirement assets, without paying current taxes or early withdrawal penalties at the time of transfer.
      </h6>
      <h6>Roth IRA  is an individual retirement account that offers tax-free growth and tax-free withdrawals in retirement. Roth IRA rules dictate that as long as you've owned your account for 5 years* and you're age 59½ or older, you can withdraw your money when you want to and you won't owe any federal taxes.</h6>

    </div>
    );


    }







    export default IRA;