import React from "react";
import List from "../Molecules/list";
import { Contents} from "../Template";
import Text from "../Atoms/text";
import { NORMAL, SMALL, VSMALL } from "../Atoms/globals/fontsize";

export default {
  title: "List"
};

// Knobs for React props
export const BulletPoint = () => (
  <>
    <Contents>
      <List>
        <Text size={VSMALL}> Lorem ipsum dolor sit amet.</Text>
      </List>
      <List>
        <Text size={SMALL}> Lorem ipsum dolor sit amet.</Text>
      </List>
      <List>
        <Text size={NORMAL}> Lorem ipsum dolor sit amet.</Text>
      </List>
    </Contents>
  </>
);
