import { createTheme } from "@vanilla-extract/css";
import { colors, fonts } from "styled-tokens";

const [themeClass, theme] = createTheme({
  color: colors,
  font: fonts,
});

export { themeClass };

export default theme;
