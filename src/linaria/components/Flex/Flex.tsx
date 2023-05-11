import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";

export const Flex: ForwardRefRenderFunction<
  HTMLDivElement,
  { children?: ReactNode; className?: string }
> = ({ children, ...props }, ref) => {
  return (
    <Box ref={ref} {...props}>
      {children}
    </Box>
  );
};
