import classNames from "classnames";
import { FC, ReactNode } from "react";
import { Box } from "../Box/Box";

const afterStyles =
  "after:absolute after:inset-0 after:scale-x-95 after:-skew-x-[18.9deg] after:scale-y-100 after:-z-10 after:rounded";

const baseStyles =
  "text-3 z-0 leading-none uppercase border-0 py-gutter px-4 bg-transparent relative outline-none bg-cover cursor-pointer tracking-wider active:bg-none";

const focus =
  "focus-visible:after:outline-2 focus-visible:after:outline-dashed focus-visible:after:outline-accent";

const solid =
  "after:bg-accent text-primary font-condensed hover:after:bg-primaryHover hover:text-white active:text-primary active:after:bg-accent disabled:cursor-not-allowed disabled:text-white disabled:after:bg-muted";

const outline =
  "text-primary font-condensed after:bg-transparent after:border-primary after:border-2 hover:after:bg-primaryHover hover:text-white hover:after:border-primaryHover active:text-primary active:after:border-primary disabled:cursor-not-allowed disabled:text-white disabled:after:bg-muted";

export const Button: FC<{
  children?: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}> = ({ children, variant = "solid", className }) => {
  return (
    <Box
      as="button"
      className={classNames(
        afterStyles,
        baseStyles,
        focus,
        {
          [solid]: variant === "solid",
          [outline]: variant === "outline",
        },
        className
      )}
    >
      {children}
    </Box>
  );
};
