import React from "react";
import { Body, Footer } from "../src/Template";
import Nav from '../src/Organism/nav'
import Menu from '../src/Molecules/menu'
import Logo from '../src/Atoms/globals/logo'

import "./App.css";

function App() {
  return (
    <>
      <Body>
        <Nav>
          <Logo face='logo' text='Joshua Enyi-Christopher'/>
          <Menu />
        </Nav>


      </Body>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
