import { useId, useRef, useState } from "react";

/** A single tab label and its rendered panel content. */
export interface TabsItem {
	content: React.ReactNode;
	label: string;
}

/**
 * Renders an accessible tab list with keyboard navigation.
 *
 * @param props.items Tab metadata and panel content.
 * @param props.label Accessible label for the tab list.
 * @returns A controlled tab interface scoped to the provided items.
 */
export function Tabs({ items, label }: { items: TabsItem[]; label: string }) {
	const tabsId = useId();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const focusTab = (index: number) => {
		setSelectedIndex(index);
		tabRefs.current[index]?.focus();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
		switch (event.key) {
			case "ArrowRight":
			case "ArrowDown": {
				event.preventDefault();
				focusTab((index + 1) % items.length);
				break;
			}
			case "ArrowLeft":
			case "ArrowUp": {
				event.preventDefault();
				focusTab((index - 1 + items.length) % items.length);
				break;
			}
			case "Home": {
				event.preventDefault();
				focusTab(0);
				break;
			}
			case "End": {
				event.preventDefault();
				focusTab(items.length - 1);
				break;
			}
		}
	};

	return (
		<div>
			<div
				aria-label={label}
				aria-orientation="horizontal"
				className="tab-list"
				role="tablist">
				{items.map((item, index) => {
					const isSelected = index === selectedIndex;
					const tabId = `${tabsId}-tab-${index}`;
					const panelId = `${tabsId}-panel-${index}`;

					return (
						<button
							key={item.label}
							ref={(element) => {
								tabRefs.current[index] = element;
							}}
							aria-controls={panelId}
							aria-selected={isSelected}
							className={`tab-button${isSelected ? " tab-button--selected" : ""}`}
							id={tabId}
							onClick={() => setSelectedIndex(index)}
							onKeyDown={(event) => handleKeyDown(event, index)}
							role="tab"
							tabIndex={isSelected ? 0 : -1}
							type="button">
							{item.label}
						</button>
					);
				})}
			</div>
			<div className="tab-panels">
				{items.map((item, index) => {
					const isSelected = index === selectedIndex;
					const tabId = `${tabsId}-tab-${index}`;
					const panelId = `${tabsId}-panel-${index}`;

					return (
						<div
							key={item.label}
							aria-labelledby={tabId}
							className="tab-panel"
							hidden={!isSelected}
							id={panelId}
							role="tabpanel"
							tabIndex={isSelected ? 0 : -1}>
							{item.content}
						</div>
					);
				})}
			</div>
		</div>
	);
}
