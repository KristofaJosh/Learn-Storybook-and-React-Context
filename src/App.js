import React from "react";
import { Body, Footer, Contents, Inner, Heading } from "../src/Template";
import Text from "../src/Atoms/text";
import Nav from "../src/Organism/nav";
import Menu from "./Molecules/menu";
import Logo from "../src/Atoms/globals/logo";
// import Avatar from "../src/Atoms/images/avatar";
// import Buttons from "../src/Atoms/button";
// import List from "../src/Molecules/list";
// import Disc from "../src/Atoms/globals/decorators/disc"
// import { ThemeProvider } from "styled-components";
// import { GREEN } from "../src/Atoms/globals/colors/colors";
import { VSMALL, MEDIUM } from "../src/Atoms/globals/fontsize";
// import IMAGE from "../src/Atoms/images/avatar/test.jpg";
import Social from "../src/Molecules/socials";
// import HeroText from "../src/Organism/herotext";
import About from '../src/Page/about';
import Home from '../src/Page/home';
import Works from '../src/Atoms/images/works'

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

        <Home/>

        <Works/>

        <About/>

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
