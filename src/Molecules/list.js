import React from "react";
import styled from "styled-components";
import Disc from "../Atoms/globals/decorators/disc";

export default function list(props) {
  return (
    <ListStyle>
      <Disc />
      {props.children}
    </ListStyle>
  );
}

const ListStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
