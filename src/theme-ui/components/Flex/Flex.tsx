"use client";
import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import { ThemeUIStyleObject } from "theme-ui";

export const Flex: ForwardRefRenderFunction<
  HTMLDivElement,
  { children?: ReactNode; className?: string; sx?: ThemeUIStyleObject }
> = ({ children, sx, ...props }, ref) => {
  return (
    <Box display="flex" sx={sx} {...props}>
      {children}
    </Box>
  );
};
