import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        listStyle: "none"
      }}
    >
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/mobile">Mobile</NavigationItem>
    </ul>
  );
};

export default navigationItems;
