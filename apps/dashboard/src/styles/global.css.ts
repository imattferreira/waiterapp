import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  background: "#fafafa",
  color: "#333",
  fontFamily: "GeneralSans, sans-serif",
});

globalStyle("button", {
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
  background: "none",
  border: "none",
});

globalStyle("path", {
  stroke: "#333",
});

export const container = style({
  marginLeft: 156,
});
