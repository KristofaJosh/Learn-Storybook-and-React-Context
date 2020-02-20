import React from 'react';
import Disc from '../Atoms/globals/decorators/disc';
import { NAVY } from '../Atoms/globals/colors';


export default {
    title: "Disc",
    parameters: {
        backgrounds: [
          { name: 'Background', value: `${NAVY}`, default: true },
        ]
      },

}


export const disc = () => (
    <Disc></Disc>
)