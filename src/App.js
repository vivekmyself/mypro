import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import "./App.css";

import Home from "./content/Home";
import Stuff from "./content/Stuff";
import Contact from "./content/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <Row>
            <Col xs="6">
              <h1>Simple SPA</h1>
            </Col>
            <Col xs="6">
              <div>
                <Nav className="header">
                  <NavItem>
                    <NavLink exact to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/stuff">Stuff</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
              </div>
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  }
}
Container.propTypes = {
  fluid: PropTypes.bool
};

export default App;
