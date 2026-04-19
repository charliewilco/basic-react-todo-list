import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tabs } from "../tabs";

describe("Tabs", () => {
	test("renders an accessible tablist with the first panel selected by default", () => {
		render(
			<Tabs
				label="Test tabs"
				items={[
					{ label: "First", content: <div>First panel</div> },
					{ label: "Second", content: <div>Second panel</div> },
					{ label: "Third", content: <div>Third panel</div> },
				]}
			/>,
		);

		const tabs = screen.getAllByRole("tab");
		const panels = screen.getAllByRole("tabpanel", { hidden: true });

		expect(screen.getByRole("tablist", { name: "Test tabs" })).toBeInTheDocument();
		expect(tabs[0]).toHaveAttribute("aria-selected", "true");
		expect(tabs[1]).toHaveAttribute("aria-selected", "false");
		expect(panels[0]).toBeVisible();
		expect(panels[1]).not.toBeVisible();
	});

	test("changes panels on click and supports keyboard navigation", async () => {
		render(
			<Tabs
				label="Test tabs"
				items={[
					{ label: "First", content: <div>First panel</div> },
					{ label: "Second", content: <div>Second panel</div> },
					{ label: "Third", content: <div>Third panel</div> },
				]}
			/>,
		);

		const [firstTab, secondTab, thirdTab] = screen.getAllByRole("tab");

		await userEvent.click(secondTab);
		expect(secondTab).toHaveAttribute("aria-selected", "true");
		expect(screen.getByRole("tabpanel")).toHaveTextContent("Second panel");

		secondTab.focus();
		await userEvent.keyboard("{End}");
		expect(thirdTab).toHaveFocus();
		expect(thirdTab).toHaveAttribute("aria-selected", "true");

		await userEvent.keyboard("{ArrowLeft}");
		expect(secondTab).toHaveFocus();
		expect(secondTab).toHaveAttribute("aria-selected", "true");

		await userEvent.keyboard("{Home}");
		expect(firstTab).toHaveFocus();
		expect(firstTab).toHaveAttribute("aria-selected", "true");
	});
});
