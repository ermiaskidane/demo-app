import React from "react";

const cockpit = props => {
  let disabler = false;
  if (props.owner.length <= 3) {
    disabler = true;
  }
  return (
    <React.Fragment>
      <h1 className={props.assingedClasses} onClick={props.numbersClicked}>
        react app
      </h1>

      <button className={props.changeButton} onClick={props.clickChangeHandler}>
        click me{" "}
      </button>
      <button disabled={disabler}>login</button>

      <p
        style={{
          border: "2px solid brown",
          margin: "1px 19rem ",
          backgroundColor: "#ccc"
        }}
        onClick={props.login}
      >
        Login{" "}
      </p>
    </React.Fragment>
  );
};

export default cockpit;
