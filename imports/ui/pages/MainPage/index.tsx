import { Hello } from "/imports/ui/components/Hello";
import React from "react";
import Navigation from "/imports/ui/containers/Navigation";

const MainPage = () => {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>

      <div className="main">
        <h1>Welcome to Meteor!</h1>
        <Hello />
      </div>
    </div>
  );
};

export default MainPage;
