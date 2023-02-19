import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme.css";

export const overlay = style({
  background: "rgba(0, 0, 0, 0.8)",
  zIndex: 100,
  position: "absolute",
  inset: 0,
  content: "",
});

export const container = style({
  zIndex: 100,
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const modal = style({
  width: 480,
  padding: "40px 32px 32px",
  background: theme.color.gray[100],
  borderRadius: 8,
});

export const header = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 40,
});

export const closeButton = style({
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    background: theme.color.gray[100],
  },
});
