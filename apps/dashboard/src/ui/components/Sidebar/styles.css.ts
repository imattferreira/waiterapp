import { style } from "@vanilla-extract/css";
import theme from "../../styles/theme.css";

export const container = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  width: 108,
  padding: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.color.white,
});

export const logo = style({
  color: theme.color.gray[400],
  fontSize: 24,
  marginBottom: 80,
});

export const w = style({
  fontWeight: 600,
});
