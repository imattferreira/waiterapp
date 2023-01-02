import { style } from "@vanilla-extract/css";
import theme from "../../../../../styles/theme.css";

export const container = style({
  margin: "24px 0",
  display: "flex",
  alignItems: "center",
});

export const img = style({
  borderRadius: 6,
});

export const qty = style({
  fontSize: 14,
  color: theme.color.gray[300],
  margin: "0 12px",
});

export const priceText = style({
  fontSize: 14,
  marginTop: 4,
});
