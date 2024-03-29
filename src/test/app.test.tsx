import { describe, test, expect, vi } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { App } from "../app";

const IntersectionObserverMock = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	takeRecords: vi.fn(),
	unobserve: vi.fn(),
}));

const ResizeObserverMock = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

describe("Todo List", () => {
	test("setup", async () => {
		render(<App />);

		expect(screen.queryAllByRole("listitem")).toHaveLength(2);
	});

	test("add todo", async () => {
		render(<App />);

		await userEvent.click(screen.getByLabelText("Add New"));

		expect(screen.getByRole("dialog")).toBeInTheDocument();
		const input = screen.getByRole("textbox");
		await userEvent.type(input, "Eat a snack");

		await userEvent.click(screen.getByLabelText("Submit"));
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

		expect(screen.queryAllByRole("listitem")).toHaveLength(3);
	});

	test("remove todo", async () => {
		render(<App />);

		await userEvent.click(screen.queryAllByLabelText("Remove Todo")[0]);

		expect(screen.queryAllByRole("listitem")).toHaveLength(1);
	});
});
