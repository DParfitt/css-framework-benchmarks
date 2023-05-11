import { FC, ReactNode } from "react";
import { ButtonVariants, button } from "./Button.css";
import { Box } from "../Box/Box";
import { classnames } from "../../utils/classnames";
// import { getTheme } from "../utils/themeContext";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & ButtonVariants;

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  // const { button } = getTheme() || { button: () => "" };

  return (
    <Box as="button" className={classnames(button(rest), className)}>
      {children}
    </Box>
  );
};
