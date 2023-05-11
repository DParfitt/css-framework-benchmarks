// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-arrow-callback */
import { ElementType, forwardRef, ReactNode } from "react";
import { Box as ThemeUIBox, BoxOwnProps as ThemeUIBoxOwnProps } from "theme-ui";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentRef,
} from "./Box.types";

const defaultElement = ThemeUIBox;

export type OwnBoxProps = {
  children?: ReactNode;
  variant?: string;
} & Omit<ThemeUIBoxOwnProps, "variant">;

export type BoxProps<C extends ElementType = "div"> = PolymorphicComponentProps<
  C,
  OwnBoxProps
>;

export const Box: PolymorphicComponent<OwnBoxProps> = forwardRef(
  function RenderBox<C extends ElementType = typeof defaultElement>(
    { children, ...props }: BoxProps<C>,
    ref: PolymorphicComponentRef<C>
  ) {
    return (
      <ThemeUIBox {...props} ref={ref}>
        {children}
      </ThemeUIBox>
    );
  }
);
