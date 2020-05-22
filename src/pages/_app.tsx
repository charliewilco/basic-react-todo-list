import * as React from "react";
import { AppProps } from "next/app";
import "../index.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
