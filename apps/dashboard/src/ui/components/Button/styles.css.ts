import { style, styleVariants } from "@vanilla-extract/css";
import theme from "../../styles/theme.css";

const base = style({
  height: 48,
  width: 384,
  padding: "16px 0",
  fontWeight: 600,
  borderRadius: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    opacity: 0.8,
  },
});

export const containerVariants = styleVariants({
  primary: [
    base,
    {
      background: theme.color.red[400],
      color: theme.color.white,
    },
  ],
  secondary: [
    base,
    {
      background:theme.color.white,
      color: theme.color.red[400],
    },
  ],
  disabled: [
    base,
    {
      background: theme.color.gray[200],
      color: theme.color.white,
      cursor: "not-allowed",

      ":hover": {
        opacity: 1,
      },
    },
  ],
});
