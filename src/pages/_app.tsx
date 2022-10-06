import type { AppProps } from "next/app";
import "../index.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
