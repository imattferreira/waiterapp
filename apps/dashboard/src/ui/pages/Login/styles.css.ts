import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const wrapper = style({
  maxWidth: 384,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const paragraph = style({
  marginBottom: 8,
});

export const logo = style({
  ":last-child": {
    fontWeight: 400,
  },
});

export const form = style({
  marginTop: 40,
});

export const input = style({
  ":first-child": {
    marginBottom: 32,
  },
});

export const submitButton = style({
  marginTop: 40,
});
