import React from "react";
import { Contents, Inner } from "../../Template";
import Avatar from "../../Atoms/images/avatar";
import IMAGE from "../../Atoms/images/avatar/default.gif";
import HeroText from "../../Organism/herotext";
import Social from "../../Molecules/socials";

export default function index() {
  return (
    <>
      <Contents>
        <Inner>
          <HeroText />
        </Inner>
        <Inner align="right ">
          <Avatar image={IMAGE} />
        </Inner>
      </Contents>
      <br />
      <br />
      <br />
      <Contents>
        <Inner>
          <Social />
        </Inner>
        <Inner></Inner>
      </Contents>
    </>
  );
}
