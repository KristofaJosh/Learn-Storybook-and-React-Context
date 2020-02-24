import React from "react";
import styled from "styled-components";
import { Heading } from "../../Template";
import img from "../../Atoms/images/avatar/default.gif";

export default function index(props) {
  return (
    <>
      <Heading text={"Recent Works"} />
      <WorksStyled>
        <Card className="previous">
          <div>
            <img alt="t" src={img}></img>
          </div>
        </Card>
        <Card className="active">
          <div>
            <img alt="t" src={img}></img>
          </div>
        </Card>
        <Card className="next">
          <div>
            <img alt="t" src={img}></img>
          </div>
        </Card>
      </WorksStyled>
    </>
  );
}

const WorksStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  align-items: center;
  padding-bottom: 1rem;

  img {
    // height: 15rem;
    // max-height: 15rem;
    // margin: 0 5rem;
  }
`;

const Card = styled.div`
  max-width: 30rem;
  max-height: 30rem;
  margin: 0 5rem;
  display: flex;
  justify-content: center;

  div {
    // background-color: green;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
  }

  &.previous {
    width: 15rem !important;
    height: 20rem;
    position: relative;
    top: -20px;
  }

  &.active {
    width: 32rem;
    height: 26rem;
  }

  &.next {
    width: 15rem !important;
    height: 20rem;
    position: relative;
    bottom: -20px;
  }
`;
