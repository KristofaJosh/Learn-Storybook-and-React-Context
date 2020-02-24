import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Body, Footer, Contents, Inner } from "../src/Template";
import Text from "../src/Atoms/text";
import Nav from "../src/Organism/nav";
import Menu from "./Molecules/menu";
import Logo from "../src/Atoms/globals/logo";
import { VSMALL, MEDIUM } from "../src/Atoms/globals/fontsize";
import Social from "../src/Molecules/socials";
import About from "../src/Page/about";
import Home from "../src/Page/home";
import Works from "../src/Page/work";

import "./App.css";

function App() {
  let year = new Date();
  // const theme = {
  //   mode: "light"
  // };

  return (
    <>
      <Body>
        <Nav>
          <Logo face="logo" text="Joshua Enyi-Christopher" />
          <Menu />
        </Nav>

        {/* <> */}
          <Router>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        {/* </> */}

        <Works />
      </Body>

      <Footer>
        <Text weight={500} size={MEDIUM}>
          I'm available for freelance work,
        </Text>
        <Text weight={500} size={MEDIUM}>
          you can reach me by
        </Text>
        <Contents>
          <Inner>
            <Social />
          </Inner>
          <Inner align="end">
            <Text weight={600} size={VSMALL}>
              {year.getFullYear()} - All rights reserved - TheChristophers
            </Text>
          </Inner>
        </Contents>
      </Footer>
    </>
  );
}

export default App;
