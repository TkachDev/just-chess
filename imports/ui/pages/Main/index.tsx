import { Hello } from "/imports/ui/components/Hello";
import { Info } from "/imports/ui/components/Info";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Link to="tasks">Tasks</Link>
      <Hello />
      <Info />
    </div>
  );
};

export default Main;
