import React from "react";
import ReactDOM from "react-dom/client";
import { ListView } from "./list-view";
import { Provider } from "./context";

import "./index.css";

function App() {
	return (
		<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 dark:from-sky-900 dark:to-zinc-900">
			<div className="max-w-xl py-2 px-2 mx-auto">
				<Provider>
					<ListView />
				</Provider>
			</div>
		</div>
	);
}

const root = document.getElementById("root");

if (root !== null) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
