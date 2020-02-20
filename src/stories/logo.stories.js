import React from 'react';
import Logo from '../Atoms/globals/logo';
import {NAVY} from '../Atoms/globals/colors'
export default {
  title: "Logo",
    parameters: {
        backgrounds: [
          { name: 'Background', value: `${NAVY}`, default: true },
        ]
      },
}

export const LogoIcon = () => (
    <Logo face='logo'></Logo>
)

export const LogoWithText = () => (
    <Logo face='logo' text='Logo'/>
)