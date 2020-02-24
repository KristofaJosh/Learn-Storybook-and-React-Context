import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Buttons from "../Atoms/button";
import { ThemeProvider } from "styled-components";
import { NAVY } from '../Atoms/globals/colors/colors';


export default {
  title: "Buttons",
  parameters: {
    backgrounds: [
      { name: 'Background', value: `${NAVY}`, default: true },
    ]
  },
  decorators: [withKnobs]
};

const theme = {
  mode: "light",
};

// Knobs for React props
export const GreenButton = () => (
  <ThemeProvider theme={theme}>
    <Buttons variant="secondary">{text("Label", "Contact Me")}</Buttons>
  </ThemeProvider>
);

export const WhiteButton = () => (
  <ThemeProvider theme={theme}>
    <Buttons variant="primary">{text("Label", "brief me")}</Buttons>
  </ThemeProvider>
);
