import { describe, expect, test, vi } from "vitest";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { TodoContext } from "../context";
import { Modal } from "../modal";
import { createHandlers, createState, toTodoHandlers } from "./test-helpers";

function renderModal(isModalOpen: boolean, onDismissModal = vi.fn()) {
	const handlers = createHandlers({ onDismissModal });
	const state = createState({ isModalOpen });

	return render(
		<>
			<button type="button">Open modal</button>
			<TodoContext.Provider value={[state, toTodoHandlers(handlers)]}>
				<Modal>
					<div>Modal body</div>
				</Modal>
			</TodoContext.Provider>
		</>,
	);
}

describe("Modal", () => {
	test("opens and closes the native dialog based on state", () => {
		const { rerender } = renderModal(true);

		expect(screen.getByRole("dialog")).toHaveAttribute("open");

		rerender(
			<>
				<button type="button">Open modal</button>
				<TodoContext.Provider
					value={[createState({ isModalOpen: false }), toTodoHandlers(createHandlers())]}>
					<Modal>
						<div>Modal body</div>
					</Modal>
				</TodoContext.Provider>
			</>,
		);

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
	});

	test("dismisses on cancel and backdrop click", () => {
		const onDismissModal = vi.fn();
		renderModal(true, onDismissModal);

		const dialog = screen.getByRole("dialog");
		dialog.dispatchEvent(new Event("cancel", { cancelable: true }));
		fireEvent.click(dialog);

		expect(onDismissModal).toHaveBeenCalledTimes(2);
	});

	test("restores focus to the opener when the dialog closes", async () => {
		const triggerLabel = "Open modal";
		const { rerender } = render(
			<>
				<button type="button">{triggerLabel}</button>
				<TodoContext.Provider
					value={[createState({ isModalOpen: false }), toTodoHandlers(createHandlers())]}>
					<Modal>
						<button type="button">Inside modal</button>
					</Modal>
				</TodoContext.Provider>
			</>,
		);

		const trigger = screen.getByRole("button", { name: triggerLabel });
		trigger.focus();

		rerender(
			<>
				<button type="button">{triggerLabel}</button>
				<TodoContext.Provider
					value={[createState({ isModalOpen: true }), toTodoHandlers(createHandlers())]}>
					<Modal>
						<button type="button">Inside modal</button>
					</Modal>
				</TodoContext.Provider>
			</>,
		);

		screen.getByRole("button", { name: "Inside modal" }).focus();

		rerender(
			<>
				<button type="button">{triggerLabel}</button>
				<TodoContext.Provider
					value={[createState({ isModalOpen: false }), toTodoHandlers(createHandlers())]}>
					<Modal>
						<button type="button">Inside modal</button>
					</Modal>
				</TodoContext.Provider>
			</>,
		);

		await waitFor(() => {
			expect(trigger).toHaveFocus();
		});
	});
});
