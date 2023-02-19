import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme.css";

export const container = style({
  height: "100vh",
  background: theme.color.red[400],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.color.gray[100],
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
  background: theme.color.gray[100],
  color: theme.color.red[400],
  fontWeight: 600,
  borderRadius: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    opacity: 0.8,
  },
});
