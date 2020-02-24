import React from "react";
import Text from "../Atoms/text";
import Buttons from "../Atoms/button";
import { ThemeProvider } from "styled-components";
import { BIG, NORMAL } from "../Atoms/globals/fontsize";

export default function herotext() {
  const theme = {
    mode: "light"
  };
  return (
    <>
      <Text mb={0} size={BIG}>
        Bring your
      </Text>
      <Text mb={0} size={BIG}>
        brand to life
      </Text>
      <Text mb={0} size={BIG}>
        with my
      </Text>
      <Text mb={0} size={BIG}>
        help
      </Text>
      <Text size={NORMAL}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo
        dolor nihil animi similique eveniet!
      </Text>
      <ThemeProvider theme={theme}>
        <Buttons variant="secondary">Contact Me</Buttons>
      </ThemeProvider>
    </>
  );
}
