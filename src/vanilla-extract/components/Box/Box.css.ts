import { style } from "@vanilla-extract/css";
import { createComponentTheme } from "../../utils/createComponentTheme";

export const box = createComponentTheme(({ atoms }) =>
  style([atoms({ margin: "none" })])
);
