import React from "react";
import Phone from "./Phone/phone";
import { AuthContext } from "../App";

const listName = [
  { name: "ermias", type: "huawei", id: "1A" },
  { name: "kokobe", type: "iphone", id: "2A" },
  { name: "natu", type: "sumsung", id: "3A" },
  { name: "saymon", type: "sumsung", id: "4A" },
  { name: "gdewon", type: "sumsung", id: "5A" },
  { name: "cubo", type: "sumsung", id: "6A" }
];

// const mobile = props => {
//   return (
//     <div>
//       <AuthContext.Consumer>
//         {auth =>
//           auth ? (
//             <h4>user Authenticated!!!</h4>
//           ) : (
//             <h5>user not Authenticated!!!</h5>
//           )
//         }
//       </AuthContext.Consumer>
//       {/* // <h4>heading four </h4> */}
//       {listName.map((own, index) => {
//         return (
//           <Phone
//             key={own.id}
//             clicked={event => {
//               props.clickDelete(event, own.id);
//             }}
//             name={own.name}
//             mobile={own.type}
//             changed={event => props.changeState(event, own.name)}
//             owners={props.owner}
//             submit={props.submitter}
//           />
//         );
//       })}
//     </div>
//   );
// };

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
            submit={props.submitter}
          />
        );
      })}
    </div>
  );
};

export default mobile;
