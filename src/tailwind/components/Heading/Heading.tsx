import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import classNames from "classnames";

export type HeadingProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
};

const base = "uppercase leading-none font-normal";

const primary = "font-condensed text-primary";
const secondary = "font-expanded text-secondary";

const h123 = "sm:tracking-wider md:tracking-wide lg:tracking-wide";
const h456 = "tracking-wider";

const h1Primary = "sm:text-6xl md:text-7xl lg:text-8xl";
const h2Primary = "sm:text-5xl md:text-6xl lg:text-7xl";
const h3Primaryh1Secondary = "sm:text-4xl md:text-5xl lg:text-6xl";
const h4Primaryh2Secondary = "sm:text-3xl md:text-4xl lg:text-5xl";
const h5Primaryh3Secondary = "sm:text-2xl md:text-3xl lg:text-4xl";
const h6Primaryh4Secondary = "sm:text-xl md:text-2xl lg:text-3xl";

const h5Secondary = "sm:text-base md:text-lg lg:text-xl";
const h6Secondary = "sm:text-sm md:text-base lg:text-lg";

export const Heading: ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = ({ children, as, size = as, variant = "primary", className }, ref) => {
  const classes = classNames(base, className, {
    [primary]: variant === "primary",
    [secondary]: variant === "secondary",
    [h123]: size === "h1" || size === "h2" || size === "h3",
    [h456]: size === "h4" || size === "h5" || size === "h6",
    [h1Primary]: size === "h1" && variant === "primary",
    [h2Primary]: size === "h2" && variant === "primary",
    [h3Primaryh1Secondary]:
      (size === "h3" && variant === "primary") ||
      (size === "h1" && variant === "secondary"),
    [h4Primaryh2Secondary]:
      (size === "h4" && variant === "primary") ||
      (size === "h2" && variant === "secondary"),
    [h5Primaryh3Secondary]:
      (size === "h5" && variant === "primary") ||
      (size === "h3" && variant === "secondary"),
    [h6Primaryh4Secondary]:
      (size === "h6" && variant === "primary") ||
      (size === "h4" && variant === "secondary"),
    [h5Secondary]: size === "h5" && variant === "secondary",
    [h6Secondary]: size === "h6" && variant === "secondary",
  });

  return (
    <Box as={as} ref={ref} className={classes}>
      {children}
    </Box>
  );
};
