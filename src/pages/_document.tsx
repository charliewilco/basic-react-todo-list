import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	public render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
