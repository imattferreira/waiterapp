import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: 108,
  padding: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
});

export const logo = style({
  color: "#666",
  fontSize: 24,
  marginBottom: 80,
});

export const w = style({
  fontWeight: 600,
});

const optionBase = style({
  textDecoration: "none",
  fontSize: 14,
  color: "#666",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 4,

  selectors: {
    "&:not(:first-child)": {
      marginTop: 52,
    },
    "&:nth-last-child(2)": {
      marginTop: 240,
    }
  },
});

export const optionVariants = styleVariants({
  default: [optionBase, {}],
  active: [
    optionBase,
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

export const line = style({
  width: 12,
  height: 2,
  background: '#D73035',
  marginTop: 8
});
