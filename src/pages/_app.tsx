import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "src/styles/global.scss";
import "src/styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
