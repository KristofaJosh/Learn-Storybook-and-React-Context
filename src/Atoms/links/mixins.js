import theme from "styled-theming";
import { GREEN, WHITE, GREY } from "../globals/colors/colors";

export const color = theme.variants("mode", "variant", {
  primary: { light: GREEN },
  secondary: { light: WHITE },
  social: {light: GREY},
});

export const hover = theme.variants("mode", "variant", {
  primary: { light: GREEN },
  secondary: { light: GREEN },
  social: {light: WHITE},

});
