import React from "react";
import styled from "styled-components";
import { GREEN, BNAVY } from "../Atoms/globals/colors/colors";

export function Body(props) {
  return (
    <BodyStyle>
      <div className="container">{props.children}</div>
    </BodyStyle>
  );
}

export function Footer(props) {
  return (
    <FooterStyle>
      <div className="container">{props.children}</div>
    </FooterStyle>
  );
}

const BodyStyle = styled.div`
  background-color: ${BNAVY};
`;

const FooterStyle = styled.div`
  background-color: ${GREEN};
`;
