import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  lineHeight: "120%",
  fontWeight: 600,
});

export const variants = styleVariants({
  size1: [
    base,
    {
      fontSize: 56,
    },
  ],
  size2: [
    base,
    {
      fontSize: 48,
    },
  ],
  size3: [
    base,
    {
      fontSize: 40,
    },
  ],
  size4: [
    base,
    {
      fontSize: 32,
    },
  ],
  size5: [
    base,
    {
      fontSize: 24,
    },
  ],
  size6: [
    base,
    {
      fontSize: 18,
    },
  ],
  size7: [
    base,
    {
      fontSize: 16,
    },
  ],
});
