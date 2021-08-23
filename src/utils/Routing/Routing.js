import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Layout
import Header from "components/navigation/header/Header";
import Footer from "components/navigation/footer/Footer";

//Views/pages
import Home from "views/Home/Home";
import AboutUs from "views/AboutUs/AboutUs";
import Premium from "views/Premium/Premium";
import Register from "views/Register/Register";
import Login from "views/Login/Login";

const Routing = () => {
  return (
    <Router>
    <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/premium" component={Premium} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
    </Router>
  );
};

export default Routing;
