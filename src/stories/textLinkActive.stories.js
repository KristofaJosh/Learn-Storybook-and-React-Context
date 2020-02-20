import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Nav from "../Atoms/links";
import { ThemeProvider } from "styled-components";

const theme = {
  mode: "light"
};

export default {
  title: "Links",
  decorators: [withKnobs],
};

// Knobs for React props
export const Active = () => (
  <ThemeProvider theme={theme}>
    <Nav variant="primary" isActive={true}>
      {text("Label", "Contact Us")}
    </Nav>
  </ThemeProvider>
);

export const Unactive = () => (
  <ThemeProvider theme={theme}>
    <Nav variant="secondary">{text("Label", "brief me")}</Nav>
  </ThemeProvider>
);


