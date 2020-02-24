import React from "react";
import styled from "styled-components";
import { GREEN, BNAVY, NAVY } from "../Atoms/globals/colors/colors";
import Hr from "../Atoms/globals/decorators/hr";
import Text from "../Atoms/text";
import { MEDIUM } from "../Atoms/globals/fontsize";

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
      <span>&lt;&#47;</span>
    </FooterStyle>
  );
}

export function Inner(props) {
  // console.log(props);
  return <InnerContent align={props.align}>{props.children}</InnerContent>;
}

export function Contents(props) {
  return <Content>{props.children}</Content>;
}

export function Heading(props) {
  return (
    <HeadingStyle>
      <Text mb="0" size={MEDIUM}>
        {props.text}
      </Text>
      <Hr />
    </HeadingStyle>
  );
}

const HeadingStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

const BodyStyle = styled.div`
  background-color: ${BNAVY};
`;

const FooterStyle = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${GREEN};
  display: flex;
  align-items: center;
  min-height: 20rem;

  p {
    color: ${NAVY};
  }

  Logo {
    position: absolute;
    color: black !important;
    font-size: 500px;
  }

  span {
    position: absolute;
    right: 0px;
    font-size: 30rem;
    font-weight: 700;
    color: #ffffff75;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width:400px) {
      flex-direction: column;

  }
`;


const InnerContent = styled.div`
  width: 100%;
  text-align: ${props => props.align || "match-parent"};
`;
