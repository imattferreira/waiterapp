// TODO map colors
import { globalStyle } from "@vanilla-extract/css";
import theme from "./theme.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  background: theme.color.gray[100],
  color: theme.color.gray[500],
  lineHeight: "120%",
  fontFamily: "GeneralSans, sans-serif",
});

globalStyle("button", {
  cursor: "pointer",
  fontSize: "1rem",
  color: theme.color.gray[500],
  background: "none",
  border: "none",
  transition: "250ms",
});

globalStyle("a", {
  cursor: "pointer",
  fontSize: "1rem",
  color: theme.color.gray[500],
  textDecoration: "none",
  transition: "250ms",
});

globalStyle("path", {
  stroke: theme.color.gray[500],
});
