import React from "react";
import styled from "styled-components";
import Logo from "../globals/logo";
import { backgroundColor, color, hover } from "../globals/colors/mixins";
// import theme from "styled-theming";

export default function Button(props) {
  return (
    <Btn variant={props.variant}>
    {/* <Btn {...props}> */}
      {props.children}
      <Logo />
    </Btn>
  );
}

const Btn = styled.button`
  background-color: ${backgroundColor};
  padding: 0.5rem;
  color: ${color};
  border: none;
  &:hover {
    background-color: ${hover};
  }
`;
