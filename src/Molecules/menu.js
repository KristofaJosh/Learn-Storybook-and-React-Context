import React, {useState} from "react";
import styled from "styled-components";
import Links from "../Atoms/links";
import { ThemeProvider } from "styled-components";
import Button from "../Atoms/button";

export default function menu(props) {
  // const [isActive, setisActive] = useState(false);

  const links = ["Home", "About", "Work", "Contacts"];

  const theme = {
    mode: "light"
  };

  return (
    <>
      <Menu>
        <ThemeProvider theme={theme}>
        {links.map(el => (
          <Links variant="secondary" isActive={false} id={links.indexOf(el)}>{el}</Links>
        ))}
          <Button variant="primary">brief</Button>
        </ThemeProvider>
      </Menu>
    </>
  );
}

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
