import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../scss/Style.scss";

import Login from "./donor/Login";

import Header from "./../components/Header";
import Home from "./home/DonorHome";
import Donor from './donor/Doner';
import NewDonor from './donor/NewDonorRegister';
import ForgotPassword from './donor/ForgotPassword';
import PageNotFound from '../components/PageNotFound';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Donor" component={Donor} exact={true} />
            <Route path="/Login" component={Login} exact={true} />
            <Route path="/NewDonor" component={NewDonor} exact={true} />
            <Route path="/ForgotPassword" component={ForgotPassword} exact={true} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
