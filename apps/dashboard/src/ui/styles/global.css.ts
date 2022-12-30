// TODO map colors
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  background: "#fafafa",
  color: "#333",
  lineHeight: "120%",
  fontFamily: "GeneralSans, sans-serif",
});

globalStyle("button", {
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
  background: "none",
  border: "none",
  transition: '250ms'
});

globalStyle("a", {
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
  textDecoration: 'none',
  transition: '250ms'
});

globalStyle("path", {
  stroke: "#333",
});
