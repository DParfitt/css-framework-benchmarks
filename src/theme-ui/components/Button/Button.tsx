import { FC, ReactNode } from "react";
import { Box } from "../Box/Box";
import { ThemeUIStyleObject } from "theme-ui";
import { borders, colors } from "../../theme";

const buttonBaseStyles: ThemeUIStyleObject = {
  fontSize: 3,
  lineHeight: "button",
  textTransform: "uppercase",
  border: "none",
  backgroundSize: "cover",
  cursor: "pointer",
  py: "12px",
  px: 4,
  zIndex: 1,
  backgroundColor: "transparent",
  letterSpacing: "loose",
  position: "relative",
  outline: "none",
  "&:active": {
    backgroundImage: "none",
  },
};

const buttonAfterStyles: ThemeUIStyleObject = {
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    transform: "matrix(0.95, 0, -0.33, 1, 0, 0)",
    borderRadius: "4px",
    zIndex: -1,
    background: "var(--button-background, transparent)",
    border: "var(--button-border, none)",
  },
};

export const focusOutline = `2px dashed ${colors.highlight}`;

export const Button: FC<{
  children?: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  sx?: ThemeUIStyleObject;
}> = ({ children, variant = "solid", sx }) => {
  return (
    <Box
      as="button"
      sx={{
        position: "relative",
        ...(variant === "solid" && {
          ...buttonBaseStyles,
          ...buttonAfterStyles,
          fontFamily: "condensed",
          "--button-background": colors.accent,
          color: "primary",
          "&:hover": {
            "--button-background": colors.primaryHover,
            color: "white",
          },
          "&:focus-visible::after": {
            outline: focusOutline,
          },
          "&:active, &.active": {
            color: "primary",
            "--button-background": colors.accent,
          },
          "&:disabled": {
            cursor: "unset",
            color: "white",
            "--button-background": colors.muted,
          },
          "&.loading": {
            cursor: "unset",
            color: "white",
            "--button-background": colors.primary,
          },
          "&.secondary": {
            color: "white",
            "--button-background": colors.primary,
            "&:hover": {
              color: "white",
              "--button-background": colors.primaryHover,
            },
          },
        }),
        ...(variant === "outline" && {
          ...buttonBaseStyles,
          ...buttonAfterStyles,
          fontFamily: "condensed",
          color: "primary",
          "--button-background": "transparent",
          "--button-border": `${borders.normal} ${colors.primary}`,
          "&:hover": {
            color: "primaryHover",
            "--button-border": `${borders.normal} ${colors.primaryHover}`,
          },
          "&:active, &.active": {
            color: "primary",
            "--button-border": `${borders.normal} ${colors.primary}`,
          },
          "&:disabled": {
            cursor: "unset",
            color: "muted",
            "--button-border": `${borders.normal} ${colors.muted}`,
          },
          "&.loading": {
            cursor: "unset",
            color: "primary",
            "--button-border": `${borders.normal} ${colors.primary}`,
          },
          "&.secondary": {
            color: "primaryHover",
            "--button-border": `${borders.normal} ${colors.primaryHover}`,
            "&:hover": {
              color: "white",
              "--button-background": colors.primary,
              "--button-border": `${borders.normal} ${colors.primary}`,
            },
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
