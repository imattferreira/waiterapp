import { style, styleVariants } from "@vanilla-extract/css";

import theme from "@/ui/styles/theme.css";

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
      color: theme.color.gray[100],
    },
  ],
  secondary: [
    base,
    {
      background: theme.color.gray[100],
      color: theme.color.red[400],
    },
  ],
  disabled: [
    base,
    {
      background: theme.color.gray[300],
      color: theme.color.gray[100],
      cursor: "not-allowed",

      ":hover": {
        opacity: 1,
      },
    },
  ],
});
