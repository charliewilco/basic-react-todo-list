import { describe, test, expect, vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ListView } from "../list-view";
import { Provider } from "../context";

const IntersectionObserverMock = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	takeRecords: vi.fn(),
	unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

describe("Todo List", () => {
	test("setup", async () => {
		render(
			<Provider>
				<ListView />
			</Provider>
		);

		expect(screen.queryAllByRole("listitem")).toHaveLength(2);
	});

	test("add todo", async () => {
		render(
			<Provider>
				<ListView />
			</Provider>
		);

		await userEvent.click(screen.getByLabelText("Add New"));

		expect(screen.getByRole("dialog")).toBeInTheDocument();
		const input = screen.getByRole("textbox");
		await userEvent.type(input, "Eat a snack");

		await userEvent.click(screen.getByLabelText("Submit"));
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

		expect(screen.queryAllByRole("listitem")).toHaveLength(3);
	});

	test("remove todo", async () => {
		render(
			<Provider>
				<ListView />
			</Provider>
		);

		await userEvent.click(screen.queryAllByLabelText("Remove Todo")[0]);

		expect(screen.queryAllByRole("listitem")).toHaveLength(1);
	});
});
