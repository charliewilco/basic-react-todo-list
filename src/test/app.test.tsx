import { describe, expect, test, vi } from "vitest";

import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "../app";

class IntersectionObserverMock {
	disconnect = vi.fn();
	observe = vi.fn();
	takeRecords = vi.fn();
	unobserve = vi.fn();
}

class ResizeObserverMock {
	disconnect = vi.fn();
	observe = vi.fn();
	unobserve = vi.fn();
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

async function renderApp() {
	await act(async () => {
		render(<App />);
	});
}

describe("Todo List", () => {
	test("loads the seeded todos from IndexedDB", async () => {
		await renderApp();

		expect(await screen.findAllByRole("listitem")).toHaveLength(2);
	});

	test("adds a todo", async () => {
		await renderApp();

		await screen.findAllByRole("listitem");
		await userEvent.click(screen.getByLabelText("Add New"));

		expect(screen.getByRole("dialog")).toBeInTheDocument();

		const input = screen.getByRole("textbox");
		await userEvent.type(input, "Eat a snack");
		await userEvent.click(screen.getByLabelText("Submit"));

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
		});

		expect(screen.queryAllByRole("listitem")).toHaveLength(3);
	});

	test("removes a todo", async () => {
		await renderApp();

		await screen.findAllByRole("listitem");
		await userEvent.click(screen.getAllByLabelText("Remove Todo")[0]);

		await waitFor(() => {
			expect(screen.queryAllByRole("listitem")).toHaveLength(1);
		});
	});

	test("edits a todo using the IndexedDB-backed cache", async () => {
		await renderApp();

		await screen.findAllByRole("listitem");
		await userEvent.click(screen.getAllByLabelText("Edit Todo")[0]);

		const input = screen.getByRole("textbox");
		expect(input).toHaveValue("Check Flight");

		await userEvent.clear(input);
		await userEvent.type(input, "Pack lunch");
		await userEvent.click(screen.getByLabelText("Submit"));

		await waitFor(() => {
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
		});

		expect(within(screen.getByRole("tabpanel")).getByText("Pack lunch")).toBeInTheDocument();
	});

	test("tabs support keyboard navigation", async () => {
		await renderApp();

		await screen.findAllByRole("listitem");

		const [inboxTab, todayTab, logbookTab] = screen.getAllByRole("tab");

		expect(todayTab).toHaveAttribute("aria-selected", "true");
		expect(screen.getAllByRole("listitem")).toHaveLength(2);

		inboxTab.focus();
		await userEvent.keyboard("{ArrowRight}");

		expect(todayTab).toHaveFocus();
		expect(todayTab).toHaveAttribute("aria-selected", "true");
		expect(screen.getAllByRole("listitem")).toHaveLength(2);

		await userEvent.keyboard("{End}");

		expect(logbookTab).toHaveFocus();
		expect(logbookTab).toHaveAttribute("aria-selected", "true");
		expect(screen.queryAllByRole("listitem")).toHaveLength(0);
	});
});
