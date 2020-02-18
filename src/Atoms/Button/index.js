import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import backgroundColor from "./mixin"
import theme from "styled-theming";
import Logo from "../globals/logo";
import { Roboto } from '../globals/font'

export default function Button(props) {
  return (
    <ThemeProvider theme={{ mode: `${props.color}` }}>
      <Btn>
        {/* {props.children} */}
        <Logo />
      </Btn>
    </ThemeProvider>
  );
}

const BackgroundColor = theme("mode", { light: "#fff", dark: "#000" });
// const Color = theme("mode", { light: "#fff", dark: "navy" });

const Btn = styled.button`
  background-color: ${BackgroundColor};
  padding: 0.5rem;
  color: red;
  font-family: ${Roboto};
  `;
