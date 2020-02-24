import React from "react";
import styled from "styled-components";
import Links from "../Atoms/links";
import { ThemeProvider } from "styled-components";
import Text from "../Atoms/text";
import { VSMALL } from "../Atoms/globals/fontsize";

export default function index(props) {
  const links = ["Github", "LinkedIn", "Facebook", "Google"];

  const theme = {
    mode: "light"
  };

  return (
    <>
      <MenuStyle>
        <ThemeProvider theme={theme}>
          {links.map(el => (
            <Text weight={600} mb={0} size={VSMALL} key={links.indexOf(el)}>
              <Links variant="social" key={links.indexOf(el)}>
                {el}
              </Links>
            </Text>
          ))}
        </ThemeProvider>
      </MenuStyle>
    </>
  );
}

const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  font-size: 1rem;
`;
