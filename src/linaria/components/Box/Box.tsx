import { ElementType, forwardRef, ReactNode } from "react";

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentRef,
} from "./Box.types";
import { cx } from "@linaria/core";
import { css } from "@linaria/atomic";

const defaultElement = "div";

export type OwnBoxProps = {
  children?: ReactNode;
  className?: string;
};

export type BoxProps<C extends ElementType = "div"> = PolymorphicComponentProps<
  C,
  OwnBoxProps
>;

const base = css`
  margin: 0;
`;

export const Box: PolymorphicComponent<OwnBoxProps> = forwardRef(function Box<
  C extends ElementType = typeof defaultElement
>(
  { as, className, ...restProps }: BoxProps<C>,
  ref: PolymorphicComponentRef<C>
) {
  const Component = as || defaultElement;

  return <Component ref={ref} className={cx(base, className)} {...restProps} />;
});
