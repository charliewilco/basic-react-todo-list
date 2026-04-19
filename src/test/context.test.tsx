import { useContext } from "react";
import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider, TodoContext } from "../context";

function ContextHarness() {
	const [state, handlers] = useContext(TodoContext);

	return (
		<div>
			<div data-testid="modal-state">{state.isModalOpen ? "open" : "closed"}</div>
			<div data-testid="selected-id">{state.selectedTodoId ?? "none"}</div>
			<button onClick={handlers.onOpenModal} type="button">
				open
			</button>
			<button onClick={handlers.onDismissModal} type="button">
				dismiss
			</button>
			<button onClick={() => handlers.onEdit(101)} type="button">
				edit
			</button>
		</div>
	);
}

describe("Provider", () => {
	test("opens and dismisses the add modal", async () => {
		render(
			<Provider>
				<ContextHarness />
			</Provider>,
		);

		await userEvent.click(screen.getByRole("button", { name: "open" }));
		expect(screen.getByTestId("modal-state")).toHaveTextContent("open");
		expect(screen.getByTestId("selected-id")).toHaveTextContent("none");

		await userEvent.click(screen.getByRole("button", { name: "dismiss" }));
		expect(screen.getByTestId("modal-state")).toHaveTextContent("closed");
		expect(screen.getByTestId("selected-id")).toHaveTextContent("none");
	});

	test("opens edit mode with the selected todo id", async () => {
		render(
			<Provider>
				<ContextHarness />
			</Provider>,
		);

		await userEvent.click(screen.getByRole("button", { name: "edit" }));
		expect(screen.getByTestId("modal-state")).toHaveTextContent("open");
		expect(screen.getByTestId("selected-id")).toHaveTextContent("101");
	});
});
