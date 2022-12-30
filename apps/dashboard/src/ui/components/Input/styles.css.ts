import { style, styleVariants } from "@vanilla-extract/css";

export const labelText = style({
  fontSize: 14,
});

const inputWrapperBase = style({
  padding: 16,
  marginTop: 8,
  display: "flex",
  alignItems: "center",
  border: "1px solid #CCCCCC",
  borderRadius: 8,
  transition: "250ms",

  selectors: {
    "&:focus-within": {
      borderColor: "#666666",
    },
  },
});

export const inputWrapperVariants = styleVariants({
  default: [inputWrapperBase, {}],
  error: [
    inputWrapperBase,
    {
      border: "1px solid #D73035",

      selectors: {
        "&:focus-within": {
          borderColor: "#D73035",
        },
      },
    },
  ],
});

const inputBase = style({
  border: 0,
  width: "100%",
  background: "none",
  outline: "none",
  fontSize: 14,
});

export const inputVariants = styleVariants({
  default: [inputBase, {}],
  error: [
    inputBase,
    {
      color: "#D73035",

      "::placeholder": {
        color: "#D73035",
      },
    },
  ],
});

const messageWrapperBase = style({
  fontSize: 14,
  marginBottom: 8,
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: 8,
});

export const messageWrapperVariants = styleVariants({
  default: [messageWrapperBase, {}],
  error: [
    messageWrapperBase,
    {
      color: "#D73035",
    },
  ],
});

export const eyeButton = style({
  display: "flex",
  alignItems: "center",
});

export const iconError = style({
  stroke: "#D73035",
});
