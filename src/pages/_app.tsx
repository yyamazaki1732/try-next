import type { AppProps } from "next/app";
import "src/styles/global.scss";
import "src/styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
