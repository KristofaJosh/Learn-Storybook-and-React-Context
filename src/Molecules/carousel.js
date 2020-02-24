import React from "react";
import styled from "styled-components";
import { Contents, Inner, Heading } from "../../../Template";
import img from "../avatar/test.jpg";

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
  img {
    // height: 15rem;
    // max-height: 15rem;
    // margin: 0 5rem;
  }
`;

const Card = styled.div`
  background-color: blue;
  max-width: 30rem;
  max-height: 30rem;
  width: 32rem;
  height: 26rem;
  margin: 0 5rem;
  border: 5px solid red;
  display: flex;
  justify-content: center;

  div {
    background-color: green;
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
  }

  &.next {
    width: 15rem !important;
    height: 20rem;
    position: relative;
    bottom: -77px;
  }
`;
