import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

import Home from "./content/Home";
import Stuff from "./content/Stuff";
import Contact from "./content/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <TransitionGroup>
              <CSSTransition className="fade-enter" timeout={1000}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/stuff" component={Stuff} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
