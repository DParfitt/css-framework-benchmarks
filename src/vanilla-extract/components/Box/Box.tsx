import { ElementType, forwardRef, ReactNode } from "react";
import { Atoms, atoms } from "../../css/sprinkles.css";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentRef,
} from "./Box.types";
import { classnames } from "../../utils/classnames";
import { box as boxStyles } from "./Box.css";

const defaultElement = "div";

export type OwnBoxProps = {
  children?: ReactNode;
  className?: string;
} & Atoms;

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
  const atomProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  for (const [name, value] of Object.entries(restProps)) {
    if ((atoms.properties as Set<string>).has(name)) {
      atomProps[name] = value;
    } else {
      otherProps[name] = value;
    }
  }

  return (
    <Component
      ref={ref}
      className={classnames(boxStyles, className, atoms(atomProps))}
      {...otherProps}
    />
  );
});
