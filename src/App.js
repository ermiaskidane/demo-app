import React, { Component } from "react";
import "./App.css";
import Phone from "./Phones/phone";

class App extends Component {
  state = {
    owner: [
      { name: "ermias", type: "huawei", id: "1A" },
      { name: "kokobe", type: "iphone", id: "2A" },
      { name: "natu", type: "sumsung", id: "3A" },
      { name: "saymon", type: "sumsung", id: "4A" },
      { name: "gdewon", type: "sumsung", id: "5A" },
      { name: "cubo", type: "iphone", id: "6A" }
    ],
    change: false

    // sumsung: 3,
    // iphone: 2,
    // huawei: 1
  };

  clickChangeHandler = () => {
    console.log(this.state.change);
    const doesChange = this.state.change;
    // this.setState({ change: !doesChange });
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

  deleteClickHandler = ownerId => {
    const owner = [...this.state.owner];
    // owner.filter(f => {
    //   return f.id === ownerId;
    // });
    owner.splice(ownerId, 1);
    this.setState({ owner: owner });
  };

  render() {
    let owner = null;

    // const maps = this.state.owner.map((own, index) => {
    //   return (
    //     <Phone
    //       key={own.id}
    //       clicked={() => this.deleteClickHandler(own.id)}
    //       name={own.name}
    //       mobile={own.type}
    //       changed={event => this.changedHandler(event, own.id)}
    //     />
    //   );
    // });
    // console.log(maps);
    if (this.state.change) {
      owner = (
        <div>
          {this.state.owner.map((own, index) => {
            return (
              <Phone
                key={own.id}
                clicked={() => this.deleteClickHandler(own.id)}
                name={own.name}
                mobile={own.type}
                changed={event => this.changedHandler(event, own.id)}
              />
            );
          })}
        </div>
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
        <h1 className={assingedClasses.join(" ")}>react app</h1>
        <button
          className={changeButton.join(" ")}
          onClick={this.clickChangeHandler}
        >
          click me{" "}
        </button>
        {owner}
        {/* <Phone
          mobile={this.state.owner[4].type}
          name={this.state.owner[4].name}
          clicked={this.clickedHandler}
          changed={this.changedHandler}
        />
        <Phone
          mobile={this.state.owner[1].type}
          name={this.state.owner[1].name}
        />
        <Phone> well props children</Phone> */}
      </div>
    );
  }
}

export default App;
