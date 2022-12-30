import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24,
});
