import { style, styleVariants } from "@vanilla-extract/css";

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
      background: "#D73035",
      color: "#FFFFFF",
    },
  ],
  secondary: [
    base,
    {
      background: "#FFFFFF",
      color: "#D73035",
    },
  ],
  disabled: [
    base,
    {
      background: "#CCCCCC",
      color: "#FFFFFF",
      cursor: "not-allowed",

      ":hover": {
        opacity: 1,
      },
    },
  ],
});
