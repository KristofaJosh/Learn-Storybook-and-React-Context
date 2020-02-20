import React from "react";
import styled from "styled-components";
import { GREEN } from "../globals/colors";

export default function logo(props) {
  let logo = "";

  if (props.face === "logo") {
    logo = (
      <Logo>
        &lt;&#47;<span>{props.text}</span>
      </Logo>
    );
  } else {
    logo = <span>&#47;&gt;</span>;
  }
  return <span>{logo}</span>;
}

const Logo = styled.span`
  color: ${GREEN};
  font-weight: 700;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.3rem;
    color: white;
    font-weight: 600;
    font-size: 0.75rem;
  }
`;
