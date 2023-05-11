import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import type { Atoms } from "../../css/sprinkles.css";

export const Flex: ForwardRefRenderFunction<HTMLDivElement, { children?: ReactNode; className?: string } & Atoms> = ({ children, ...props }, ref) => {
  return (
    <Box display="flex" ref={ref} {...props}>
      {children}
    </Box>
  );
};
