import React, { Component } from "react";

import Mobile from "../component/Mobile";
import Cockpit from "../component/Cockpit/Cokcpit";

export const AuthContext = React.createContext(false);

class ListName extends Component {
  state = {
    owner: [
      { name: "ermias", type: "huawei", id: "1A" },
      { name: "kokobe", type: "iphone", id: "2A" },
      { name: "natu", type: "sumsung", id: "3A" },
      { name: "saymon", type: "sumsung", id: "4A" },
      { name: "gdewon", type: "sumsung", id: "5A" },
      { name: "cubo", type: "iphone", id: "6A" }
    ],
    change: false,
    numbers: 0,
    isAuthenticated: false,
    myBgdClr: "red"
  };
  componentDidMount() {
    console.log(this.props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return (
      nextState.change !== this.state.change ||
      nextState.owner !== this.state.owner ||
      nextState.isAuthenticated !== this.state.isAuthenticated
    );
  }

  componentDidUpdate() {
    const ordered = this.state.owner.reverse();
    console.log(ordered);
    this.setState(prevState => {
      return {
        owner: ordered
      };
    });
  }

  clickChangeHandler = () => {
    console.log(this.state.change);
    this.setState(prevState => {
      return {
        change: !prevState.change
      };
    });
    console.log(this.state.change);
  };

  changedHandler = (event, id) => {
    const ownerIndex = this.state.owner.findIndex(o => {
      return o.id === id;
    });
    console.log(event.target);
    console.log(ownerIndex);

    // dont mutate
    const owners = {
      ...this.state.owner[ownerIndex]
    };

    // change
    owners.name = event.target.value;

    //save
    const owner = [...this.state.owner];
    owner[ownerIndex] = owners;

    this.setState({
      owner: owner
    });
  };

  // find out if I could submitt the change through a button

  // submitHandler = () => {
  //   changedHandler();
  // };
  deleteClickHandler = ownerId => {
    const owner = [...this.state.owner];
    owner.splice(ownerId, 1);
    this.setState({
      owner: owner
    });
  };

  numbersClickedHandler = () => {
    this.setState((prevState, props) => {
      return {
        numbers: prevState.numbers + 1
      };
    });
    console.log(this.state.numbers);
  };

  loginHandler = () => {
    this.setState(prevState => {
      return {
        isAuthenticated: !prevState.isAuthenticated
      };
    });
  };

  nextPage = () => {
    const queryParams = [];
    const ownerState = this.state.owner;
    ownerState.forEach(obj => {
      Object.keys(obj).forEach(i => {
        queryParams.push(
          encodeURIComponent(i) + "=" + encodeURIComponent(obj[i])
        );
      });
    });
    const queryString = queryParams.join("&");
    console.log(queryParams);
    // this.props.history.push("/mobile");
    this.props.history.push({ pathname: "/mobile", search: "?" + queryString });
  };

  render() {
    let mobile = null;
    if (this.state.change) {
      mobile = (
        <Mobile
          owner={this.state.owner}
          clickDelete={this.deleteClickHandler}
          changeState={this.changedHandler}
          submitter={this.submitHandler}
        />
      );
    }

    const assingedClasses = [];
    if (this.state.owner.length <= 3) {
      assingedClasses.push("Green");
    }

    const changeButton = [];
    if (this.state.change) {
      changeButton.push("Green", "Circle");
    }
    return (
      <div className="App">
        <Cockpit
          assingedClasses={assingedClasses.join(" ")}
          changeButton={changeButton.join(" ")}
          clickChangeHandler={this.clickChangeHandler}
          numbersClicked={this.numbersClickedHandler}
          login={this.loginHandler}
          owner={this.state.owner}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {mobile}
        </AuthContext.Provider>
        <button onClick={this.nextPage}>Next page</button>
        <div style={{ backgroundColor: `${this.state.myBgdClr}` }}>
          style template way{" "}
        </div>
        <h1>hello:{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default ListName;
