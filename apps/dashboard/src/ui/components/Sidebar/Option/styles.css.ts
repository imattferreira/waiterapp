import { style, styleVariants } from "@vanilla-extract/css";

const container = style({
  textDecoration: "none",
  fontSize: 14,
  color: "#666",
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
      color: "#D73035",
    },
  ],
});

export const iconVariants = styleVariants({
  default: {
    stroke: "#666",
  },
  active: {
    stroke: "#D73035",
  },
});

export const dash = style({
  width: 12,
  height: 2,
  background: "#D73035",
  marginTop: 8,
});
