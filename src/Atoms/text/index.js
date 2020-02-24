import React from "react";
import styled from "styled-components";
import { NORMAL } from "../globals/fontsize";

export default function index(props) {
  return (
    <TextStyle mb={props.mb +'!important'} weight={props.weight} size={props.size} color={props.color || `#fff`}>
      {props.children}
    </TextStyle>
  );
} 

const TextStyle = styled.p`
  font-size: ${props => props.size || NORMAL};
  color: ${props => props.color};
  margin-bottom: ${props => props.mb || '1rem'};
  font-weight: ${props => props.weight || '0'}
`;
