import Head from "next/head";
import { ListView } from "../list-view";

const IndexPage = () => {
	return (
		<div className="Container">
			<Head>
				<title>Basic Todo List</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<h1>Tasks</h1>
			<ListView />
		</div>
	);
};

export default IndexPage;
