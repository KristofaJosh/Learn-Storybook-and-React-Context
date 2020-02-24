import React from "react";
import { Contents, Inner, Heading } from "../../Template";
import Text from "../../Atoms/text";
import List from "../../Molecules/list";

// import { ThemeProvider } from "styled-components";
import { GREEN } from "../../Atoms/globals/colors/colors";
// import { BIG, NORMAL, VSMALL, MEDIUM } from "../src/Atoms/globals/fontsize";

export default function index() {
  return (
    <>
      <Heading text={"About"} />
      <Contents>
        <Inner>
          <Text color={GREEN}>&lt;p&gt;</Text>
          <Text color={GREEN}>
            Lorem ipsum, dolor sit amet
            <br /> consecteturadipisicing elit.
            <br />
            Non, nemo dolor nihil animi
            <br />
            similique eveniet!
          </Text>
          <Text color={GREEN}>&lt;/p&gt;</Text>
        </Inner>
        <Inner>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo
            dolor nihil animi similique eveniet! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Non, nemo dolor nihil animi similique
            eveniet!
          </Text>
          <List>
            <Text mb={0}>Lorem ipsum, dolor sit </Text>
          </List>
          <List>
            <Text mb={0}>Lorem ipsum, dolor sit </Text>
          </List>
          <List>
            <Text mb={0}>Lorem ipsum, dolor sit </Text>
          </List>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo
            eveniet!
          </Text>
        </Inner>
      </Contents>
    </>
  );
}
