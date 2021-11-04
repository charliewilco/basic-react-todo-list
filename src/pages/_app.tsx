import { AppProps } from "next/app";
import "@reach/tabs/styles.css";
import "@reach/checkbox/styles.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          text-size-adjust: 100%;
          box-sizing: border-box;
          background: #04060b;
          font: 400 100%/1.6 inherit;
          color: #f7f8fb;
          -webkit-font-smoothing: antialiased;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html,
        body,
        #__next,
        main,
        .container {
          height: 100%;
        }
      `}</style>
    </main>
  );
};

export default CustomApp;
