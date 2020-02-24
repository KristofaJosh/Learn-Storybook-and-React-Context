import theme from "styled-theming";
// import { BIG, NORMAL, MEDIUM, BTNNORMAL, SMALL } from "../globals/fontsize";
import { WHITE, NAVY } from "../globals/colors/colors";


export const fontSize = theme.variants("mode", "variant", {
    primary: { light: WHITE },
    secondary: { light: NAVY }
  });
  
export const Color = theme.variants("mode", "variant", {
    primary: { light: WHITE },
    secondary: { light: NAVY }
  });
  
