import React from "react";
import ReactDOM from "react-dom/client";
import { ListView } from "./list-view";
import "./index.css";

function App() {
	return (
		<div className="Container">
			<h1>Tasks</h1>
			<ListView />
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
