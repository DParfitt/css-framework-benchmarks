import { style, styleVariants } from "@vanilla-extract/css";
import { atoms } from "../../css/sprinkles.css";
import { breakpointQuery } from "../../css/breakpoints";

const baseSectionStyles = style([
  atoms({
    position: "relative",
    overflow: "hidden",
    paddingY: [7, 11],
  }),
  {
    maxHeight: "390px",
  },
]);

export const section = styleVariants({
  primary: [
    baseSectionStyles,
    atoms({
      backgroundColor: "primary",
    }),
  ],
  secondary: [
    baseSectionStyles,
    atoms({
      backgroundColor: "accent",
    }),
  ],
  tertiary: [
    baseSectionStyles,
    atoms({
      backgroundColor: "grayLight",
    }),
  ],
});

export const container = style([
  atoms({
    position: "relative",
    flexDirection: "column",
    padding: ["large", "large", "none"],
  }),
  {
    "@media": {
      [`${breakpointQuery("mobile")}`]: { minHeight: "190px" },
      [`${breakpointQuery("tablet")}`]: { minHeight: "230px" },
    },
    zIndex: 1,
  },
]);

const baseContentContainerStyles = style([
  container,
  atoms({
    alignItems: "center",
    textAlign: "center",
    marginX: "auto",
  }),
  {
    "@media": {
      [`${breakpointQuery("mobile")}`]: { maxWidth: "full" },
      [`${breakpointQuery("tablet")}`]: { maxWidth: "796px" },
      [`${breakpointQuery("desktop")}`]: { maxWidth: "860px" },
    },
  },
]);

export const contentContainer = styleVariants({
  left: [
    baseContentContainerStyles,
    atoms({ alignItems: "flex-start", textAlign: "left" }),
  ],
  center: [
    baseContentContainerStyles,
    atoms({ alignItems: "center", textAlign: "center" }),
  ],
  right: [
    baseContentContainerStyles,
    atoms({ alignItems: "flex-end", textAlign: "right" }),
  ],
});

export const mediaContainer = style([
  atoms({
    width: "full",
    height: "full",
    position: "absolute",
    inset: 0,
  }),
  {
    zIndex: 0,
  },
]);

export const media = style([
  atoms({
    width: "full",
    height: "full",
  }),
  {
    objectFit: "cover",
    objectPosition: "top center",
    opacity: 0.5,
  },
]);

export const cta = style([
  atoms({
    marginTop: ["medium", "large", "large"],
    marginBottom: "none",
  }),
  { zIndex: 1, maxWidth: "fit-content" },
]);

export const subtitle = styleVariants({
  primary: [atoms({ color: "white" })],
  secondary: [atoms({ color: "white" })],
  tertiary: [atoms({ color: "secondary" })],
});

export const title = styleVariants({
  primary: [atoms({ color: "white" })],
  secondary: [atoms({ color: "white" })],
  tertiary: [atoms({ color: "primary" })],
});

const descriptionBase = style([
  atoms({ marginTop: [3, 4, 4] }),
  {
    ":last-of-type": {
      marginBottom: "none",
    },
  },
]);

export const description = styleVariants({
  primary: [
    descriptionBase,
    atoms({
      color: "white",
    }),
  ],
  secondary: [
    descriptionBase,
    atoms({
      color: "white",
    }),
  ],
  tertiary: [
    descriptionBase,
    atoms({
      color: "primary",
    }),
  ],
});
