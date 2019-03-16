import React, { Component } from "react";
import Samsung from "../../assets/images/samsung.jpeg";
import Iphone from "../../assets/images/iphone.jpg";
import Huawei from "../../assets/images/huawei.jpg";
import "./MobilePics.css";

class MobilePics extends Component {
  state = {
    owner: null
  };

componentWillMount() {
    console.log(this.props.location.search);
    const query = new URLSearchParams(this.props.location.search);
    let owner = {};
    for (let param of query.entries()) {
      // if (param[0] === "owner") {
      //   owner = param[1];
      // }
      owner[param[0]] = param[1];
    }
    console.log(query.entries());
    console.log(owner);
    this.setState({ owner: owner });
    // manage to pass all the state on the url but only the last item able to set may state and also no display on the clients ?
  }

  render() {
    console.log(this.props);
    console.log(this.state.owner);
    // though my state is an object it doesnot appear on the cleints ?
    const transferredState = Object.keys(this.state.owner).map(o => {
      return (
        <ul key={o.id}>
          <li>{o.name}</li>
          <li>{o.type}</li>
        </ul>
      );
    });
    return (
      <div className="MobilePics">
        {transferredState}
        <h1>hello:</h1>
        <img className="Samsung" src={Samsung} alt="no display" />
        <img className="Iphone" src={Iphone} alt="no display" />;
        <img className="Huawei" src={Huawei} alt="no display" />;
      </div>
    );
  }
}

export default MobilePics;
