export const borders = {
  none: "none",
  thin: "1px solid",
  normal: "2px solid",
  thick: "3px solid",
  "ultra-thick": "12px solid",
};

export const baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  gray: ["", "#F2F2F2", "#DEDEDE", "#9C9C9C", "#696969", "#cecdcf"],
  yellow: [
    "",
    "#FFDD00",
    "#FFB500",
    "#D19F59",
    "#DEA845",
    "#b27024",
    "#fbbb29",
  ],
  green: [
    "",
    "#9FD147",
    "#138000",
    "#176248",
    "#44F8D1",
    "#BBF2E1",
    "#24a3a3",
    "#0A6356",
    "#002314",
    "#55BAA2",
  ],
  blue: ["", "#4AD0FF", "#00ABFF", "#111954", "#B1D8EA", "#b5e0f1"],
  red: [
    "",
    "#EC8B73",
    "#FC856D",
    "#D0421B",
    "#961B26",
    "#50000b",
    "#5E2037",
    "#DF333F",
    "#95252F",
  ],
};
export const breakpoints = ["720px", "1020px", "1440px"];

export const numericBreakpoints = [720, 1020, 1440];
export const mobileBreakpoint = "(max-width: 719px)";
export const tabletBreakpoint = "(min-width: 719px)";
export const desktopBreakpoint = "(min-width: 1019px)";
export const desktopLargeBreakpoint = "(min-width: 1439px)";

// Spaces is about space between/around containers and margin & paddings
export const space = [
  0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
];
// help for spaces = [0, 1, 2, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 014, 015, 016, 017];

// Sizing is about container sizes
const sizing = {
  px: "1px",
  "0": "0px",
  "1": "8px",
  "2": "16px",
  "3": "24px",
  "4": "32px",
  "5": "40px",
  "6": "48px",
  "7": "56px",
  "8": "64px",
  "9": "72px",
  "10": "80px",
  "11": "88px",
  "12": "96px",
  "13": "104px",
  "14": "112px",
  "15": "120px",
  "16": "128px",
  "17": "136px",
  "18": "144px",
  "19": "152px",
  "20": "160px",
};

const maxWidth = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
};

const width = {
  "1/2": "50%",
  "0/3": "0%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "0/4": "0%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "0/5": "0%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "0/6": "0%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "0/12": "0%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  "12/12": "100%",
};

export const sizes = {
  ...maxWidth,
  ...width,
  ...sizing,
  full: "100%",
  screenHeight: "100vh",
  screenWidth: "100vw",
};

export const grids = {
  default: {
    gap: [3, 4, 5],
  },
  flexGrid: {
    gutter: ["8px", "12px", "14px"], // Half the size of the design because of Flex formatting context (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
    columns: 12, // MAIN VALUE FOR GRID COLUMNS
  },
};

export const baseFonts = {
  sans: "var(--antarctica-beta)",
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  greek: '"Antarctica Beta", sans-serif',
  latin: 'Antarctica Beta", sans-serif',
};

export const fonts = {
  body: baseFonts.sans,
  heading: "inherit",
  expanded: "var(--antarctica-beta-expanded-black)",
  condensed: "var(--antarctica-beta-cond-bold)",
  monospace: baseFonts.mono,
};

export const fontSizes = [11, 13, 14, 16, 20, 25, 31, 39, 49, 61, 76];
// help  for fontSizes = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10];

export const baseFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.normal,
};

export const baseLineHeights = {
  none: "1.1",
  tight: "1.18",
  snug: "1.25",
  normal: "1.4",
  relaxed: "1.6",
  loose: "2",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.normal,
  button: baseLineHeights.none,
};

export const letterSpacings = {
  tight: "-0.01em",
  snug: "-0.005em",
  normal: "normal",
  relaxed: "0.025em",
  loose: "0.045em",
  digits: "0.175em",
};

export const colors = {
  ...baseColors,
  text: baseColors.blue[3],
  textMuted: baseColors.gray[3],
  background: baseColors.white,
  primary: baseColors.blue[3],
  primaryHover: baseColors.blue[2],
  secondary: baseColors.blue[2],
  secondaryHover: baseColors.blue[5],
  muted: baseColors.gray[3],
  highlight: baseColors.blue[2],
  accent: baseColors.yellow[6],
  success: baseColors.green[2],
  info: baseColors.blue[1],
  warning: baseColors.yellow[1],
  danger: baseColors.red[3],
  grayLight: baseColors.gray[1],
  grayDark: baseColors.gray[4],
};

export const theme = {
  colors,
  borders,
  space,
  sizes,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  grids,
};
