import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  background: "#fafafa",
  color: "#333",
  fontFamily: "GeneralSans, sans-serif",
});

globalStyle("button", {
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
});
