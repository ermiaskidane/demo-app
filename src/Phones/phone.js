import React from "react";
import "./phone.css";

const phone = props => {
  const style = {
    border: "1px solid black",
    margin: "0px 5rem",
    borderRadius: "5px",
    marginTop: "3px"
  };
  
  //  for some reason it only work with headingClass array not string(gives me readOnly)
  
  const headingClass = [];
  if (props.owners.length <= 5) {
    headingClass.push("Blue");
  }
  
  console.log(props.owners.length);

  return (
    <div className="Phone" style={style} onClick={props.clicked}>
      <h1>
        {" "}
        {props.name} have a {props.mobile} mobile.
      </h1>

      <input
        style={{ marginBottom: "3px" }}
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default phone;
