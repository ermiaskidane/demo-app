import React, { Component } from "react";

import ListName from "./containers/ListName";
import MobilePics from "./component/MobilePics/Mobilepics";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ListName />
        <MobilePics />
      </div>
    );
  }
}
