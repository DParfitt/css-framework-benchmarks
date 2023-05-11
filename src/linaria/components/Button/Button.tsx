import { FC, ReactNode } from "react";
import { css } from "@linaria/atomic";
import { cx } from "@linaria/core";
import { Box } from "../Box/Box";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & {
  variant?: "solid" | "outline";
};

const focusStyles = css`
  &:focus-visible::after {
    outline: 2px dashed var(--color-accent);
  }
`;

const afterStyles = css`
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: matrix(0.95, 0, -0.33, 1, 0, 0);
    border-radius: var(--border-radius-small);
    z-index: -1;
    background: var(--button-background, transparent);
    border: var(--button-border, none);
  }
`;

const baseButtonStyles = css`
  font-size: var(--font-size-3);
  line-height: var(--line-height-none);
  text-transform: uppercase;
  border: none;
  background-size: cover;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
  z-index: 1;
  background-color: transparent;
  position: relative;
  outline: none;
  &:active {
    background-image: none;
  }
`;

const solidButtonStyles = css`
  font-family: var(--font-condensed);
  color: var(--color-primary);
  --button-background: var(--color-accent);
  &:hover {
    --button-background: var(--color-primary-hover);
  }
  &:focus-visible::after {
    outline: 2px dashed var(--color-accent);
  }
  &:active {
    --button-background: var(--color-primary-hover);
    color: var(--color-primary);
  }
`;

const outlineButtonStyles = css`
  font-family: var(--font-condensed);
  color: var(--color-primary);
  --button-background: transparent;
  --button-border: 2px solid var(--color-primary);
  &:hover {
    --button-border: 2px solid var(--color-primary-hover);
    color: var(--color-primary-hover);
  }
`;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "solid",
  ...rest
}) => {
  return (
    <Box
      as="button"
      className={cx(
        afterStyles,
        baseButtonStyles,
        focusStyles,
        variant === "solid" ? solidButtonStyles : outlineButtonStyles,
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};
