// A green line

import React from "react";
import styled from "styled-components";
import { GREEN } from "../colors/colors";

export default function hr() {
  return <Line></Line>;
}

const Line = styled.div`
  background-color: ${GREEN};
  width: 50%;
  height: 3.5px;
  margin-bottom: 0;
`;
