import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import { ThemeUIStyleObject } from "theme-ui";

export type HeadingProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
  sx?: ThemeUIStyleObject;
};

const baseHeadingStyles: ThemeUIStyleObject = {
  textTransform: "uppercase",
  lineHeight: "none",
  fontWeight: "heading",
};

const primaryHeadingStyles: ThemeUIStyleObject = {
  ...baseHeadingStyles,
  fontFamily: "condensed",
  color: "primary",
};

const secondaryHeadingStyles: ThemeUIStyleObject = {
  ...baseHeadingStyles,
  fontFamily: "expanded",
  color: "secondary",
};

const headingStyles = {
  primary: {
    h1: {
      ...primaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["8", "9", "10"],
    },
    h2: {
      ...primaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["7", "8", "9"],
    },
    h3: {
      ...primaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["6", "7", "8"],
    },
    h4: {
      ...primaryHeadingStyles,
      letterSpacing: "loose",
      fontSize: ["5", "6", "7"],
    },
    h5: {
      ...primaryHeadingStyles,
      letterSpacing: "loose",
      fontSize: ["4", "5", "6"],
    },
    h6: {
      ...primaryHeadingStyles,
      letterSpacing: "loose",
      fontSize: ["3", "4", "5"],
    },
  },
  secondary: {
    h1: {
      ...secondaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["6", "7", "8"],
    },
    h2: {
      ...secondaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["5", "6", "7"],
    },
    h3: {
      ...secondaryHeadingStyles,
      letterSpacing: ["loose", "relaxed", "relaxed"],
      fontSize: ["4", "5", "6"],
    },
    h4: {
      ...secondaryHeadingStyles,
      letterSpacing: "loose",
      fontSize: ["3", "4", "5"],
    },
    h5: {
      ...secondaryHeadingStyles,
      letterSpacing: "loose",
      fontSize: ["2", "3", "4"],
    },
    h6: {
      ...secondaryHeadingStyles,
      letterSpacing: "loose",
      lineHeights: ["none", "relaxed", "relaxed"],
      fontSize: ["1", "2", "3"],
    },
  },
};

export const Heading: ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = ({ children, as, size = as, variant = "primary", sx }, ref) => {
  return (
    <Box
      as={as}
      sx={{
        ...headingStyles[variant][size],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
