import React from "react";
import { Footer, Contents, Inner, Heading } from "../Template/index";
// import { MEDIUM, VSMALL } from "../Atoms/globals/fontsize";
// import Social from "../Molecules/socials";
import Text from "../Atoms/text";

export default {
  title: "Template"
};

// Knobs for React props
export const PrimaryTemplate = () => (
  <>
    <Heading text={"About Me"} />
    <Contents>
      <Inner>
        <Text>lorem</Text>
      </Inner>
      <Inner>
        <Text>lorem</Text>
      </Inner>
    </Contents>
  </>
);

export const FooterTemplate = () => <Footer />;


export const HeadingTemplate = () => <Heading text={"About"} />;

export const ImageCarousel = () => (
  <>
    <Heading text={"Image Carousel"} />
    <Contents>
      <Inner>Column 1</Inner>
      <Inner>Column 2</Inner>
    </Contents>
  </>
);
