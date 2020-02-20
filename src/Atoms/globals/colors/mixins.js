import theme from "styled-theming";
import { GREEN, WHITE, NAVY } from "./colors";

export const color = theme.variants("mode", "variant", {
  primary: { light: NAVY },
  secondary: { light: NAVY }
});

export const backgroundColor = theme.variants("mode", "variant", {
  primary: { light: WHITE },
  secondary: { light: GREEN }
});

export const hover = theme.variants("mode", "variant", {
  primary: { light: GREEN },
  secondary: { light: WHITE }
});

