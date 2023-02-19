import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "26px 16px 16px",
  border: "1px solid rgba(204, 204, 204, 0.4)",
  borderRadius: 8,
});

export const titleWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const listTitle = style({
  margin: "0 8px",
});

export const counterDisplay = style({
  padding: "4px 8px",
  fontWeight: 500,
  background: "rgba(204, 204, 204, 0.2)",
  borderRadius: 4,
});

export const ordersWrapper = style({
  marginTop: 34,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 16,
});
