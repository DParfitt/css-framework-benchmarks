import {
  AntarcticaBeta,
  AntarcticaBetaCondBold,
  AntarcticaBetaExpandedBlack,
} from "../styles/fonts";

import "./reset.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div
      className={`${AntarcticaBeta.variable} ${AntarcticaBetaCondBold.variable} ${AntarcticaBetaExpandedBlack.variable}`}
    >
      <div className={AntarcticaBeta.className}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
