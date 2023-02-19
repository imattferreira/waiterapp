import { style, styleVariants } from "@vanilla-extract/css";

import theme from "@/ui/styles/theme.css";

const container = style({
  fontSize: 14,
  color: theme.color.gray[500],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 4,
  width: "100%",

  selectors: {
    "&:not(:first-child)": {
      marginTop: 52,
    },
    "&:nth-last-child(2)": {
      marginTop: 240,
    },
  },
});

export const containerVariants = styleVariants({
  default: [container, {}],
  active: [
    container,
    {
      color: theme.color.red[400],
    },
  ],
});

export const iconVariants = styleVariants({
  default: {
    stroke: theme.color.gray[500],
  },
  active: {
    stroke: theme.color.red[400],
  },
});

export const dash = style({
  width: 12,
  height: 2,
  background: theme.color.red[400],
  marginTop: 8,
});
