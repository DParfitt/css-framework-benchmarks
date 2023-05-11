import { ForwardRefRenderFunction, ReactNode } from "react";
import { Box } from "../Box/Box";
import { css } from "@linaria/atomic";
import { cx } from "@linaria/core";

export type HeadingProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "primary" | "secondary";
  children?: ReactNode;
  className?: string;
};

const base = css`
  text-transform: uppercase;
  line-height: var(--line-height-none);
  font-weight: inherit;
`;

const primary = css`
  font-family: var(--font-condensed);
  color: var(--color-primary);
`;

const secondary = css`
  font-family: var(--font-expanded);
  color: var(--color-secondary);
`;

const h123 = css`
  @media (min-width: 640px) {
    letter-spacing: var(--letter-spacing-loose);
  }
  @media (min-width: 768px) {
    letter-spacing: var(--letter-spacing-relaxed);
  }
  @media (min-width: 1024px) {
    letter-spacing: var(--letter-spacing-relaxed);
  }
`;

const h456 = css`
  letter-spacing: var(--letter-spacing-loose);
`;

const h1Primary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-8);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-9);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-10);
  }
`;

const h2Primary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-7);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-8);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-9);
  }
`;

const h3Primaryh1Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-6);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-7);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-8);
  }
`;

const h4Primaryh2Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-5);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-6);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-7);
  }
`;

const h5Primaryh3Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-4);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-5);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-6);
  }
`;

const h6Primaryh4Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-3);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-4);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-5);
  }
`;

const h5Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-2);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-3);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-4);
  }
`;

const h6Secondary = css`
  @media (min-width: 640px) {
    font-size: var(--font-size-1);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-2);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-3);
  }
`;

export const Heading: ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = ({ children, as, size = as, variant = "primary", className }, ref) => {
  return (
    <Box
      as={as}
      ref={ref}
      className={cx(
        base,
        variant === "primary" ? primary : secondary,
        size === "h1" || size === "h2" || size === "h3" ? h123 : h456,
        size === "h1" && variant === "primary" ? h1Primary : "",
        size === "h2" && variant === "primary" ? h2Primary : "",
        (size === "h3" && variant === "primary") ||
          (size === "h1" && variant === "secondary")
          ? h3Primaryh1Secondary
          : "",
        (size === "h4" && variant === "primary") ||
          (size === "h2" && variant === "secondary")
          ? h4Primaryh2Secondary
          : "",
        (size === "h5" && variant === "primary") ||
          (size === "h3" && variant === "secondary")
          ? h5Primaryh3Secondary
          : "",
        (size === "h6" && variant === "primary") ||
          (size === "h4" && variant === "secondary")
          ? h6Primaryh4Secondary
          : "",
        size === "h5" && variant === "secondary" ? h5Secondary : "",
        size === "h6" && variant === "secondary" ? h6Secondary : "",
        className
      )}
    >
      {children}
    </Box>
  );
};
