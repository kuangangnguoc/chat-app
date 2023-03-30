import React from "react";
const Hello = (props) => {
    return (
      <div>
        <h2>{props.subtitle}</h2>
        <p>Hello, {props.name}!</p>
      </div>
    );
  };
  
  export default Hello;