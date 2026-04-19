import { beforeEach, describe, expect, test, vi } from "vitest";

const { createRootMock, renderMock } = vi.hoisted(() => ({
	createRootMock: vi.fn(),
	renderMock: vi.fn(),
}));

vi.mock("react-dom/client", () => ({
	default: {
		createRoot: createRootMock,
	},
	createRoot: createRootMock,
}));

describe("main", () => {
	beforeEach(() => {
		createRootMock.mockReset();
		renderMock.mockReset();
		createRootMock.mockReturnValue({ render: renderMock });
		document.body.innerHTML = "";
		vi.resetModules();
	});

	test("bootstraps the app when a root element exists", async () => {
		document.body.innerHTML = '<div id="root"></div>';

		await import("../main");

		expect(createRootMock).toHaveBeenCalledWith(document.getElementById("root"));
		expect(renderMock).toHaveBeenCalledTimes(1);
	});

	test("does nothing when the root element is missing", async () => {
		await import("../main");

		expect(createRootMock).not.toHaveBeenCalled();
		expect(renderMock).not.toHaveBeenCalled();
	});
});
