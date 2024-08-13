import React from "react";
import Index from "pages/index";
import Products from "pages/products";
import Services from "pages/services";
import ContactAndAboutUs from "pages/contactAndAboutUs";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/products' component={Products}/>
			<Route exact path='/services' component={Services}/>
			<Route exact path='/contact-and-about-us' component={ContactAndAboutUs}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
