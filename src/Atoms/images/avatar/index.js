import React from "react";
import styled from "styled-components";
import img from "./default.gif";

export default function index(props) {
  return (
    <Image>
      <div>
        <img src={props.image || img} alt="profile"></img>
      </div>
    </Image>
  );
}

const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    overflow: hidden;
    background-image: cover;
    width: 50vmin;
    height: 50vmin;
    max-height: 500px;
    max-width: 500px;
  }

  img {
    height: 100%;
  }

  @media (max-width: 400px) {
    div {
      display: none;
    }
  }
`;
