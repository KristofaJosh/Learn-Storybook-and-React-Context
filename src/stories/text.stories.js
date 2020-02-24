import React from "react";
import Text from '../Atoms/text'
import {BIG, NORMAL, SMALL, VSMALL } from "../Atoms/globals/fontsize";

export default {
  title: "Typography",
};

// Knobs for React props
export const All = () => (
  <>
    <Text size={VSMALL}>{'The quick brown fox jumps over the lazy dog'}</Text>
    <Text size={SMALL}>{'The quick brown fox jumps over the lazy dog'}</Text>
    <Text size={NORMAL}>{'The quick brown fox jumps over the lazy dog'}</Text>
    <Text size={BIG}>{'The quick brown fox jumps over the lazy dog'}</Text>
  </>
);


