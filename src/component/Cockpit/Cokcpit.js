import React from "react";

const cockpit = props => {
  return (
    <React.Fragment>
      <h1 className={props.assingedClasses} onClick={props.numbersClicked}>react app</h1>
      <button className={props.changeButton} onClick={props.clickChangeHandler}>
        click me{" "}
      </button>
    </React.Fragment>
  );
};

export default cockpit;
