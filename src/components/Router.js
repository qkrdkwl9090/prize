import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "routes/home";
import Regist from "routes/regist";
import Login from "routes/login"
import Header from "components/Header"

const PageRouter = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/regist" component={Regist}/>
            <Route path="/login" component={Login}/>
            <Redirect from="*" to="/"/>
        </Switch>
        
    </Router>
)
export default PageRouter;