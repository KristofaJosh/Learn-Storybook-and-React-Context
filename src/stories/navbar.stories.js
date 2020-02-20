import React from "react";
import Nav from '../Organism/nav'
import Menu from '../Molecules/menu'
import Logo from '../Atoms/globals/logo'


export default {
  title: "NavBar",
};

// Knobs for React props
export const NavBar = () => (
  <Nav>
    <Logo face="logo" text="Joshua Enyi-Christopher" />
    <Menu />
  </Nav>
);
