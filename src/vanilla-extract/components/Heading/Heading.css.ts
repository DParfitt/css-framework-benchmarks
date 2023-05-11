import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../css/sprinkles.css";

export const heading = recipe({
  base: [
    atoms({
      textTransform: "uppercase",
      lineHeight: "none",
      fontWeight: "normal",
    }),
  ],
  variants: {
    variant: {
      primary: atoms({
        fontFamily: "condensed",
        color: "primary",
      }),
      secondary: atoms({
        fontFamily: "expanded",
        color: "secondary",
      }),
    },
    size: {
      h1: atoms({
        letterSpacing: ["loose", "relaxed", "relaxed"],
      }),
      h2: atoms({
        letterSpacing: ["loose", "relaxed", "relaxed"],
      }),
      h3: atoms({
        letterSpacing: ["loose", "relaxed", "relaxed"],
      }),
      h4: atoms({
        letterSpacing: "loose",
      }),
      h5: atoms({
        letterSpacing: "loose",
      }),
      h6: atoms({
        letterSpacing: "loose",
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "primary",
        size: "h1",
      },
      style: atoms({
        fontSize: [8, 9, 10],
      }),
    },
    {
      variants: {
        variant: "primary",
        size: "h2",
      },
      style: atoms({
        fontSize: [7, 8, 9],
      }),
    },
    {
      variants: {
        variant: "primary",
        size: "h3",
      },
      style: atoms({
        fontSize: [6, 7, 8],
      }),
    },
    {
      variants: {
        variant: "primary",
        size: "h4",
      },
      style: atoms({
        fontSize: [5, 6, 7],
      }),
    },
    {
      variants: {
        variant: "primary",
        size: "h5",
      },
      style: atoms({
        fontSize: [4, 5, 6],
      }),
    },
    {
      variants: {
        variant: "primary",
        size: "h6",
      },
      style: atoms({
        fontSize: [3, 4, 5],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h1",
      },
      style: atoms({
        fontSize: [6, 7, 8],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h2",
      },
      style: atoms({
        fontSize: [5, 6, 7],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h3",
      },
      style: atoms({
        fontSize: [4, 5, 6],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h4",
      },
      style: atoms({
        fontSize: [3, 4, 5],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h5",
      },
      style: atoms({
        fontSize: [2, 3, 4],
      }),
    },
    {
      variants: {
        variant: "secondary",
        size: "h6",
      },
      style: atoms({
        lineHeight: ["none", "relaxed", "relaxed"],
        fontSize: [1, 2, 3],
      }),
    },
  ],
});
