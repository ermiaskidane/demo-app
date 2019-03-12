import React from "react";
import "./phone.css";
// import { AuthContext } from "../../App";

const phone = props => {
  const style = {
    border: "1px solid black",
    margin: "0px 5rem",
    borderRadius: "5px",
    marginTop: "3px"
  };

  //  for some reason it only work with headingClass array not string(gives me readOnly)
  const headingClass = [];
  if (props.owners.length <= 4) {
    headingClass.push("Blue");
  }

  console.log(props.owners.length);

  return (
    <div className="Phone" style={style}>
      <h1 className={headingClass.join(" ")} onClick={props.clicked}>
        {props.name} have a {props.mobile} mobile.
      </h1>
      {/* <AuthContext.Consumer>
        {auth =>
          auth ? (
            <input
              style={{ marginBottom: "3px" }}
              type="text"
              onChange={props.changed}
              value={props.name}
            />
          ) : null
        }
      </AuthContext.Consumer> */}
      <input
        style={{ marginBottom: "3px" }}
        type="text"
        onChange={props.changed}
        value={props.name}
      />
      <button onClick={props.submit}>submit</button>
    </div>
  );
};

export default phone;
