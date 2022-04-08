import GlobalStyles from "../styles/globals";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
      <GlobalStyles />
    </Theme>
  );
}

export default MyApp;
