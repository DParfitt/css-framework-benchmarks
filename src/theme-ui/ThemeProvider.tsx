"use client";

import { ThemeProviderProps } from "@emotion/react";
import { FC } from "react";
import { ThemeProvider as ThemeUIProvider } from "theme-ui";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => (
  <ThemeUIProvider {...props} />
);
