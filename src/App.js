import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import ListName from "./containers/ListName";
import MobilePics from "./component/MobilePics/Mobilepics";
import "./App.css";
// import NavigationItems from "./component/NavigationItems/NavigationItems";

class App extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyle: "none", display: "flex", justifyContent: "center" }}>
           <li>
              <NavLink to="/">Home</NavLink>
           </li>
           <li>
              <NavLink to="/mobile">Mobile</NavLink>
           </li>
        </ul>
        <Switch>
          <Route path="/" exact component={ListName} />
          <Route path="/mobile" strict component={MobilePics} />
        </Switch>
      </div>
    );
  }
}

export default App;
