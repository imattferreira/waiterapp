import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  background: "#D73035",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
});

export const hero = style({
  width: 155,
  marginBottom: 24,
});

export const title = style({
  selectors: {
    "&:last-child": {
      fontWeight: 400,
    },
  },
});

export const text = style({
  marginTop: 12,
});

export const loginBtn = style({
  height: 48,
  width: 384,
  marginTop: 24,
  padding: "16px 0",
  background: "#FFFFFF",
  color: "#D73035",
  fontWeight: 600,
  borderRadius: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    opacity: 0.8,
  },
});
