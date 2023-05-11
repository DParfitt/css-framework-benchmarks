import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { atoms } from "../../css/sprinkles.css";
import { createVar, style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

const buttonBackground = createVar();
const buttonBorder = createVar();

const focusStyles = style({
  selectors: {
    "&:focus-visible::after": {
      outline: `2px dashed ${vars.color.accent}`,
    },
  },
});

const afterStyles = style({
  "::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    transform: "matrix(0.95, 0, -0.33, 1, 0, 0)",
    borderRadius: vars.border.radius.small,
    zIndex: -1,
    background: buttonBackground,
    border: buttonBorder,
  },
});

export const button = recipe({
  base: [
    atoms({
      fontSize: 3,
      lineHeight: "none",
      textTransform: "uppercase",
      border: "none",
      paddingY: "gutter",
      paddingX: "large",
      backgroundColor: "transparent",
      position: "relative",
      outline: "none",
      cursor: "pointer",
    }),
    {
      backgroundSize: "cover",
      letterSpacing: "0.045em",
      ":active": {
        backgroundImage: "none",
      },
    },
  ],
  variants: {
    variant: {
      solid: [
        afterStyles,
        atoms({ fontFamily: "condensed", color: "primary" }),
        {
          vars: {
            [buttonBackground]: vars.color.accent,
          },
          ":hover": {
            vars: {
              [buttonBackground]: vars.color.primaryHover,
            },
            color: vars.color.white,
          },
          "&:active, &.active": {
            color: vars.color.primary,
            vars: {
              [buttonBackground]: vars.color.accent,
            },
          },
          "&:disabled": {
            cursor: "unset",
            color: vars.color.white,
            vars: {
              [buttonBackground]: vars.color.muted,
            },
          },
        },
        focusStyles,
      ],
      outline: [
        afterStyles,
        atoms({ fontFamily: "condensed", color: "primary" }),
        {
          vars: {
            [buttonBackground]: vars.color.transparent,
            [buttonBorder]: `${vars.border.styles.normal} ${vars.color.primary}`,
          },
          ":hover": {
            color: vars.color.primaryHover,
            vars: {
              [buttonBorder]: `${vars.border.styles.normal} ${vars.color.primaryHover}`,
            },
          },
          "&:active, &.active": {
            color: vars.color.primary,
            vars: {
              [buttonBorder]: `${vars.border.styles.normal} ${vars.color.primary}`,
            },
          },
          "&:disabled": {
            cursor: "unset",
            color: vars.color.muted,
            vars: {
              [buttonBorder]: `${vars.border.styles.normal} ${vars.color.muted}`,
            },
          },
        },
        focusStyles,
      ],
      text: {},
      circle: {},
      link: {},
      none: {},
    },
    theme: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "solid",
        theme: "secondary",
      },
      style: {
        color: vars.color.white,
        vars: {
          [buttonBackground]: vars.color.primary,
        },
        ":hover": {
          color: vars.color.white,
          vars: {
            [buttonBackground]: vars.color.primaryHover,
          },
        },
      },
    },
    {
      variants: {
        variant: "outline",
        theme: "secondary",
      },
      style: {
        color: vars.color.primaryHover,
        vars: {
          [buttonBorder]: `${vars.border.styles.normal} ${vars.color.primaryHover}`,
        },
        ":hover": {
          color: vars.color.white,
          vars: {
            [buttonBorder]: `${vars.border.styles.normal} ${vars.color.primary}`,
            [buttonBackground]: vars.color.primary,
          },
        },
      },
    },
  ],
});

// Get the type
export type ButtonVariants = RecipeVariants<typeof button>;
