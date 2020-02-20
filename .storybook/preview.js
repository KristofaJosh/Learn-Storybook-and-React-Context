import { addParameters } from "@storybook/react"; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: "DARK", value: "#23272d", default: true },
    { name: "WHITE", value: "#ffffff" },
    { name: "GREEN", value: "#33ffa9" }
  ]
});
