import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Buttons from '../Atoms/button';
import Logo from "../Atoms/globals/logo";



export default {
    title: "Buttons",
    decorators: [withKnobs]
};


export const withText = () => <Buttons>brief me</Buttons>;

// Knobs for React props
export const GreenButton = () => (
  <Buttons>
      {text('Label', 'Contact Us')}
  </Buttons>
)

export const WhiteButton = () => (
  <Buttons>
      {text('Label', 'brief me')}
  </Buttons>
)