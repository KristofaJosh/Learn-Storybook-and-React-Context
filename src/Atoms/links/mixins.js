import theme from "styled-theming";
import { GREEN, WHITE } from "../globals/colors/colors";

export const color = theme.variants("mode", "variant", {
  primary: { light: GREEN },
  secondary: { light: WHITE }
});

export const hover = theme.variants("mode", "variant", {
  primary: { light: GREEN },
  secondary: { light: GREEN }
});

