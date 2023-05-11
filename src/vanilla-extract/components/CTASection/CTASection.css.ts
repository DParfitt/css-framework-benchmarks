import { style, styleVariants } from "@vanilla-extract/css";
import { breakpointQuery } from "../../css/breakpoints";
import { createComponentTheme } from "../../utils/createComponentTheme";

const baseSectionStyles = createComponentTheme(({ atoms }) =>
  style([
    atoms({
      position: "relative",
      overflow: "hidden",
      paddingY: [7, 11],
    }),
    {
      maxHeight: "390px",
    },
  ])
);

export const section = createComponentTheme(({ atoms }) =>
  styleVariants({
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
  })
);

export const container = createComponentTheme(({ atoms }) =>
  style([
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
  ])
);

const baseContentContainerStyles = createComponentTheme(({ atoms }) =>
  style([
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
  ])
);

export const contentContainer = createComponentTheme(({ atoms }) =>
  styleVariants({
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
  })
);

export const mediaContainer = createComponentTheme(({ atoms }) =>
  style([
    atoms({
      width: "full",
      height: "full",
      position: "absolute",
      inset: 0,
    }),
    {
      zIndex: 0,
    },
  ])
);

export const media = createComponentTheme(({ atoms }) =>
  style([
    atoms({
      width: "full",
      height: "full",
    }),
    {
      objectFit: "cover",
      objectPosition: "top center",
      opacity: 0.5,
    },
  ])
);

export const cta = createComponentTheme(({ atoms }) =>
  style([
    atoms({
      marginTop: ["medium", "large", "large"],
      marginBottom: "none",
    }),
    { zIndex: 1, maxWidth: "fit-content" },
  ])
);

export const subtitle = createComponentTheme(({ atoms }) =>
  styleVariants({
    primary: [atoms({ color: "white" })],
    secondary: [atoms({ color: "white" })],
    tertiary: [atoms({ color: "secondary" })],
  })
);

export const title = createComponentTheme(({ atoms }) =>
  styleVariants({
    primary: [atoms({ color: "white" })],
    secondary: [atoms({ color: "white" })],
    tertiary: [atoms({ color: "primary" })],
  })
);

const descriptionBase = createComponentTheme(({ atoms }) =>
  style([
    atoms({ marginTop: [3, 4, 4] }),
    {
      ":last-of-type": {
        marginBottom: "none",
      },
    },
  ])
);

export const description = createComponentTheme(({ atoms }) =>
  styleVariants({
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
  })
);
