import React from "react";
import styled from "styled-components";
import { GREEN } from "../colors/colors";

export default function disc(props) {
  return <Disc></Disc>;
}

const color = `${GREEN}`;

const Disc = styled.div`
    border-radius: 50%;
    border 2px solid ${color};
    width: 1rem;
    height: 1rem;
    margin: 0 1rem;
`;
