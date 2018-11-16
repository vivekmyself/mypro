import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
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
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
