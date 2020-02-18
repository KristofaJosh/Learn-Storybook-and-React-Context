import React from "react";

export default function logo({ face, btn }, props) {
    let logo = '';

    if (face === "logo") {
        logo = <span>&lt;&#47;</span>;
    } else {
        logo = <span>&#47;&gt;</span>;
    }
  return (
    <span>
      {logo}
    </span>
  );
}
