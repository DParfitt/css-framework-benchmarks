import localFont from "next/font/local";

export const AntarcticaBetaExpandedBlack = localFont({
  src: [
    {
      path: "./fonts/AntarcticaBeta-ExpandedBlack.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
  variable: "--antarctica-beta-expanded-black",
});

export const AntarcticaBetaCondBold = localFont({
  src: [
    {
      path: "./fonts/AntarcticaBeta-ExtraCondBold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
  variable: "--antarctica-beta-cond-bold",
});

export const AntarcticaBeta = localFont({
  src: [
    {
      path: "./fonts/AntarcticaBeta-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AntarcticaBeta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AntarcticaBeta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AntarcticaBeta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
  variable: "--antarctica-beta",
});
