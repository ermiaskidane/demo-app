import React from "react";
import Phone from "./Phone/phone";
import { AuthContext } from "../App";

const mobile = props => {
  return (
    <div>
      <AuthContext.Consumer>
        {auth =>
          auth ? (
            <h4>user Authenticated!!!</h4>
          ) : (
            <h5>user not Authenticated!!!</h5>
          )
        }
      </AuthContext.Consumer>
      {/* // <h4>heading four </h4> */}
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
