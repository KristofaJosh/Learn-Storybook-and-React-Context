import React from "react";
import Avatar from '../Atoms/images/avatar'
import TestImage from '../Atoms/images/avatar/test.jpg'



export default {
  title: "Hero Image",
};

// Knobs for React props
export const Image = () => (
  <Avatar />
);

export const WithImage = () => (
  <Avatar image={TestImage} />
);
