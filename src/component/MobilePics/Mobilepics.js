import React from "react";
import Samsung from "../../assets/images/samsung.jpeg";
import Iphone from "../../assets/images/iphone.jpg";
import Huawei from "../../assets/images/huawei.jpg";
import "./MobilePics.css";

// const roomMates = [
//   { label: "ermias" },
//   { label: "kokobe" },
//   { label: "natu" },
//   { label: "saymon" },
//   { label: "gdewon" },
//   { label: "cubo" }
// ];

const mobilePics = props => {
  return (
    <div className="MobilePics">
      {/* {roomMates.map(rm => {
        return (
          <ul key={rm.label}>
            <li>{rm.label}</li>
            <img className="Samsung" src={Iphone} alt="no display" />
          </ul>
        );
      })} */}
      <img className="Samsung" src={Samsung} alt="no display" />
      <img className="Iphone" src={Iphone} alt="no display" />;
      <img className="Huawei" src={Huawei} alt="no display" />;
    </div>
  );
};

export default mobilePics;
