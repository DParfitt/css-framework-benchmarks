import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpointQuery } from "./breakpoints";
import { vars } from "./theme.css";

const marginSpace = { ...vars.space, auto: "auto" };

// Add css logival properties? https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties
// Exported so storybook can access style options
export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": breakpointQuery("tablet"),
    },
    desktop: {
      "@media": breakpointQuery("desktop"),
    },
    wide: {
      "@media": breakpointQuery("wide"),
    },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop", "wide"],
  properties: {
    alignItems: ["stretch", "center", "flex-start", "flex-end"],
    border: vars.border.styles,
    borderRight: vars.border.styles,
    borderTop: vars.border.styles,
    borderBottom: vars.border.styles,
    borderLeft: vars.border.styles,
    borderColor: vars.color,
    columnGap: vars.space,
    display: [
      "none",
      "flex",
      "inline-flex",
      "block",
      "inline",
      "inline-block",
      "grid",
      "inline-grid",
    ],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flex: [1],
    flexWrap: ["nowrap", "wrap"],
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    letterSpacing: vars.letterSpacing,
    gap: vars.space,
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
    ],
    marginBottom: marginSpace,
    marginLeft: marginSpace,
    marginRight: marginSpace,
    marginTop: marginSpace,
    outline: ["none"],
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    rowGap: vars.space,
    textAlign: ["center", "left", "right", "justify"],
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    backgroundColor: vars.color,
    borderRadius: vars.border.radius,
    bottom: [0],
    boxShadow: vars.shadow,
    color: { ...vars.color, currentColor: "currentColor" },
    cursor: ["auto", "pointer"],
    fontFamily: vars.fontFamily,
    fontStyle: ["normal", "italic", "oblique"],
    fontWeight: vars.weight,
    height: { auto: "auto", full: "100%" },
    maxHeight: { full: "100%" },
    left: [0],
    opacity: [0, 1],
    overflow: ["hidden", "scroll", "visible", "auto"],
    overflowX: ["hidden", "scroll", "visible", "auto"],
    overflowY: ["hidden", "scroll", "visible", "auto"],
    pointerEvents: ["none"],
    position: ["relative", "fixed", "absolute", "sticky"],
    right: [0],
    textDecoration: ["overline", "line-through", "underline", "none"],
    textTransform: ["lowercase", "uppercase", "capitalize"],
    top: [0],
    userSelect: ["none"],
    width: { auto: "auto", full: "100%", "fit-content": "fit-content" },
    maxWidth: { full: "100%" },
    wordBreak: ["break-word"],
    wordWrap: ["break-word"],
    whiteSpace: ["nowrap", "pre", "pre-line", "pre-wrap"],
  },
  shorthands: {
    inset: ["top", "bottom", "left", "right"],
  },
});

// Export all styles so we can use these in some storybook stories
export const atomicStyles = {
  ...responsiveProperties.styles,
  ...unresponsiveProperties.styles,
};

export const atoms = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Atoms = Parameters<typeof atoms>[0];
export type ResponsiveSpace = keyof typeof vars.space;
