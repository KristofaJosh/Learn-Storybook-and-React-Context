import React from "react";
import styled from "styled-components";
import Logo from "../globals/logo";
import { backgroundColor, color, hover } from "../globals/colors/mixins";

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
  padding: 0.7rem;
  color: ${color} !important;
  border: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: ${hover};
  }
`;
