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

export default App;

// next move is
// 1. use submitter button sothat we could see smoothchange in owner state
