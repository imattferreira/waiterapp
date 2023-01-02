import { style } from "@vanilla-extract/css";
import theme from "../../../styles/theme.css";

export const title = style({
  fontWeight: 500,
  fontSize: 14,
  marginBottom: 8,
});

export const orderStatus = style({
  fontWeight: 600,
  marginBottom: 32,
});

export const totalPriceWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 4,
});

export const price = style({
  fontWeight: 600,
});

export const buttonsContainer = style({
  display: "flex",
  alignItems: "center",
  marginTop: 32,
});

export const container = style({
  margin: "24px 0",
  display: "flex",
  alignItems: "center",
});

export const productsList = style({
  maxHeight: 440,
  overflowY: "auto",
});

// PRODUCT ITEM
export const img = style({
  borderRadius: 6,
});

export const qty = style({
  fontSize: 14,
  color: theme.color.gray[300],
  margin: "0 12px",
});

export const aTitle = style({
  fontSize: 14,
});

export const aPrice = style({
  fontSize: 14,
  marginTop: 4,
});
