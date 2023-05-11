import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import { heading } from "./Heading.css";
import { classnames } from "../../utils/classnames";

export type HeadingProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
};

export const Heading: ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = ({ children, as, size = as, variant = "primary", className }, ref) => {
  return (
    <Box
      as={as}
      ref={ref}
      className={classnames(heading({ size, variant }), className)}
    >
      {children}
    </Box>
  );
};
