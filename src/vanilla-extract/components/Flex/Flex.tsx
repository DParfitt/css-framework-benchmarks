import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import type { Atoms } from "../../css/sprinkles.css";
import { classnames } from "../../utils/classnames";
import { flex } from "./Flex.css";

export const Flex: ForwardRefRenderFunction<
  HTMLDivElement,
  { children?: ReactNode; className?: string } & Atoms
> = ({ children, className, ...props }, ref) => {
  return (
    <Box className={classnames(flex, className)} ref={ref} {...props}>
      {children}
    </Box>
  );
};
