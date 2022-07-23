import { Hello } from "/imports/ui/components/Hello";
import React from "react";
import Navigation from "/imports/ui/containers/Navigation";
import Page from "/imports/ui/components/pageLayout/Page";
import Header from "/imports/ui/components/pageLayout/Header";
import Main from "/imports/ui/components/pageLayout/Main";

const MainPage = () => {
  return (
    <Page>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <h1>Welcome to Meteor!</h1>
        <Hello />
      </Main>
    </Page>
  );
};

export default MainPage;
