export const breakpoints = {
  mobile: 0,
  tablet: 720,
  desktop: 1020,
  wide: 1440,
} as const;

export type BreakpointKeys = keyof typeof breakpoints;

export const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

export const breakpointQuery = (key: BreakpointKeys) =>
  `screen and (min-width: ${breakpoints[key]}px)`;
