import React, { useState } from "react";
import styled from "styled-components";
import Links from "../Atoms/links";
import { ThemeProvider } from "styled-components";
import Button from "../Atoms/button";

export default function Menu(props) {
  const [isActive, setisActive] = useState(false);

  const links = ["Home", "About", "Work", "Contacts"];

  const theme = {
    mode: "light"
  };

  return (
    <>
      <MenuStyle>
        <ThemeProvider theme={theme}>
        {links.map(el => (
          <Links variant="secondary" isActive={isActive} key={links.indexOf(el)}>{el}</Links>
        ))}
          <Button variant="primary">brief me</Button>
        </ThemeProvider>
      </MenuStyle>
    </>
  );
}

const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
