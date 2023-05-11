import { ThemeProvider } from "../theme-ui/ThemeProvider";

import {
  AntarcticaBeta,
  AntarcticaBetaCondBold,
  AntarcticaBetaExpandedBlack,
} from "../styles/fonts";
import * as theme from "../theme-ui/theme";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div
      className={`${AntarcticaBeta.variable} ${AntarcticaBetaCondBold.variable} ${AntarcticaBetaExpandedBlack.variable}`}
    >
      <div className={AntarcticaBeta.className}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </div>
  );
}
