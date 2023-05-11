import { style } from "@vanilla-extract/css";
import { createComponentTheme } from "../../utils/createComponentTheme";

export const flex = createComponentTheme(({ atoms }) =>
  style([
    atoms({
      display: "flex",
    }),
  ])
);
