import "fake-indexeddb/auto";
import "@testing-library/jest-dom";
import { afterEach } from "vitest";

import { resetTodoDatabase } from "../todo-store";

if (!Element.prototype.getAnimations) {
	Element.prototype.getAnimations = () => [];
}

if (window.HTMLDialogElement && !window.HTMLDialogElement.prototype.showModal) {
	window.HTMLDialogElement.prototype.showModal = function showModal() {
		this.setAttribute("open", "");
	};
}

if (window.HTMLDialogElement && !window.HTMLDialogElement.prototype.close) {
	window.HTMLDialogElement.prototype.close = function close() {
		this.removeAttribute("open");
		this.dispatchEvent(new Event("close"));
	};
}

afterEach(async () => {
	await resetTodoDatabase();
});
