import React, { Component } from "react";
import Samsung from "../../assets/images/samsung.jpeg";
import Iphone from "../../assets/images/iphone.jpg";
import Huawei from "../../assets/images/huawei.jpg";
import "./MobilePics.css";

class MobilePics extends Component {
  state = {
    owner: null
  };
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
