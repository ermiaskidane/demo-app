import React from "react";
import Phone from "./Phone/phone";

const mobile = props => {
  return (
    <div>
      {props.owner.map((own, index) => {
        return (
          <Phone
            key={own.id}
            clicked={event => {
              props.clickDelete(event, own.id);
            }}
            name={own.name}
            mobile={own.type}
            changed={event => props.changeState(event, own.id)}
            owners={props.owner}
          />
        );
      })}
    </div>
  );
};

export default mobile;
