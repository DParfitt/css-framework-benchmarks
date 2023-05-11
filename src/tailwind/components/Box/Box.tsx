import { ElementType, forwardRef, ReactNode } from "react";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentRef,
} from "./Box.types";
import classnames from "classnames";

const defaultElement = "div";

export type OwnBoxProps = {
  children?: ReactNode;
  className?: string;
};

export type BoxProps<C extends ElementType = "div"> = PolymorphicComponentProps<
  C,
  OwnBoxProps
>;

export const Box: PolymorphicComponent<OwnBoxProps> = forwardRef(function Box<
  C extends ElementType = typeof defaultElement
>(
  { className, as, ...restProps }: BoxProps<C>,
  ref: PolymorphicComponentRef<C>
) {
  const Component = as || defaultElement;

  return (
    <Component
      ref={ref}
      className={classnames("m-0", className)}
      {...restProps}
    />
  );
});
