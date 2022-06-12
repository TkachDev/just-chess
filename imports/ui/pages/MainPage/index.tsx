import { Hello } from "/imports/ui/components/Hello";
import React from "react";
import Navigation from "/imports/ui/containers/Navigation";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Meteor!</h1>
      <Hello />
    </div>
  );
};

export default MainPage;
