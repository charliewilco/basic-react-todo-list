import { useContext, useId, useMemo, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { TodoContext } from "./context";
import { List } from "./list";
import type { TodoItem } from "./todo-store";

interface TodoTabsProps {
	isMutating: boolean;
	onCompleted(id: number): void;
	onRemove(id: number): void;
	onUndo(id: number): void;
	todos: TodoItem[];
}

interface TodoView {
	count: number;
	emptyMessage: string;
	emptyTitle: string;
	label: string;
	tone: "blue" | "yellow" | "green";
	todos: TodoItem[];
	title: string;
}

export function TodoTabs({ isMutating, onCompleted, onRemove, onUndo, todos }: TodoTabsProps) {
	const [, { onOpenModal }] = useContext(TodoContext);
	const tabsId = useId();
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const completed = useMemo(() => todos.filter((todo) => todo.completed), [todos]);
	const incompleted = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);
	const items: TodoView[] = [
		{
			count: todos.length,
			emptyMessage: "Capture something in your inbox to get started.",
			emptyTitle: "Nothing to see here!",
			label: "Inbox",
			tone: "blue",
			todos,
			title: "Inbox",
		},
		{
			count: incompleted.length,
			emptyMessage: "You are clear for today.",
			emptyTitle: "Nothing to see here!",
			label: "Today",
			tone: "yellow",
			todos: incompleted,
			title: "Today",
		},
		{
			count: completed.length,
			emptyMessage: "Completed tasks will appear here once you finish them.",
			emptyTitle: "Nothing to see here!",
			label: "Completed",
			tone: "green",
			todos: completed,
			title: "Completed",
		},
	];
	const [selectedIndex, setSelectedIndex] = useState(1);

	const focusTab = (index: number) => {
		const nextIndex = (index + items.length) % items.length;
		setSelectedIndex(nextIndex);
		tabRefs.current[nextIndex]?.focus();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
		switch (event.key) {
			case "ArrowRight":
			case "ArrowDown": {
				event.preventDefault();
				focusTab(index + 1);
				break;
			}
			case "ArrowLeft":
			case "ArrowUp": {
				event.preventDefault();
				focusTab(index - 1);
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

	const selectedItem = items[selectedIndex];
	const panelDescription =
		selectedItem.label === "Today"
			? `${selectedItem.count} open tasks`
			: `${selectedItem.count} ${selectedItem.count === 1 ? "item" : "items"}`;

	return (
		<div className="planner-layout">
			<aside className="planner-sidebar">
				<div className="planner-sidebar__header">
					<p className="planner-sidebar__eyebrow">Things-inspired</p>
					<h2 className="planner-sidebar__title">Focus</h2>
				</div>

				<div aria-label="Todo filters" className="planner-nav" role="tablist">
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
								className={`planner-nav__item${isSelected ? " planner-nav__item--selected" : ""}`}
								data-tone={item.tone}
								id={tabId}
								onClick={() => setSelectedIndex(index)}
								onKeyDown={(event) => handleKeyDown(event, index)}
								role="tab"
								tabIndex={isSelected ? 0 : -1}
								type="button">
								<span className="planner-nav__item-main">
									<span className="planner-nav__glyph" aria-hidden="true"></span>
									<span>{item.label}</span>
								</span>
								<span className="planner-nav__count">{item.count}</span>
							</button>
						);
					})}
				</div>



				<div className="planner-sidebar__card">
					<p className="planner-sidebar__card-label">Snapshot</p>
					<p className="planner-sidebar__card-value">
						{incompleted.length === 0
							? "Everything for today is clear."
							: `${incompleted.length} tasks still need attention.`}
					</p>
				</div>
			</aside>

			<section className="planner-main">
				<header className="planner-main__header">
					<div>
						<p className="planner-main__eyebrow">{selectedItem.label}</p>
						<h1 className="planner-main__title">
							<span className="planner-main__title-icon" data-tone={selectedItem.tone}>
								★
							</span>
							<span>{selectedItem.title}</span>
						</h1>
						<p className="planner-main__meta">{panelDescription}</p>
					</div>
					<div className="planner-main__actions">
						<div className="planner-main__summary" aria-live="polite">
							<span>{todos.length} total</span>
							<span>{completed.length} done</span>
						</div>
						<button
							aria-label="Add New"
							className="planner-main__add"
							onClick={onOpenModal}
							type="button">
							<FiPlus />
							<span>New Task</span>
						</button>
					</div>
				</header>

				<div className="planner-main__surface">
					{items.map((item, index) => {
						const isSelected = index === selectedIndex;
						const tabId = `${tabsId}-tab-${index}`;
						const panelId = `${tabsId}-panel-${index}`;

						return (
							<div
								key={item.label}
								aria-labelledby={tabId}
								className="planner-panel"
								hidden={!isSelected}
								id={panelId}
								role="tabpanel"
								tabIndex={isSelected ? 0 : -1}>
								<List
									emptyMessage={item.emptyMessage}
									emptyTitle={item.emptyTitle}
									isMutating={isMutating}
									onCompleted={onCompleted}
									onRemove={onRemove}
									onUndo={onUndo}
									todos={item.todos}
								/>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
