// This file is used to extend the default theme of styled-components
import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
