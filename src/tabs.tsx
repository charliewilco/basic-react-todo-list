import { useContext, useMemo } from "react";
import { Tab } from "@headlessui/react";

import { ListItem } from "./list-item";
import { classNames } from "./classnames";
import { TodoContext } from "./context";
import { type TodoItem } from "./reducer";
import { ModalButton } from "./modal";
import { FiPlus } from "react-icons/fi";

function List({ todos }: { todos: TodoItem[] }) {
	const className = classNames(
		"bg-white dark:bg-zinc-900 divide-y dark:divide-zinc-700 rounded-xl overflow-hidden",
		"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
	);
	return (
		<div>
			{todos.length > 0 ? (
				<ul className={className}>
					{todos.map((t) => (
						<ListItem key={t.id} todo={t} />
					))}
				</ul>
			) : (
				<div className="py-8 text-center">
					<h2 className="w-full dark:text-white text-xl">Nothing to see here!</h2>
				</div>
			)}
		</div>
	);
}

export function TabButton({ children }: { children?: React.ReactNode }) {
	return (
		<Tab
			className={({ selected }) =>
				classNames(
					"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 dark:text-white",
					"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
					selected
						? "bg-white dark:bg-zinc-900 shadow"
						: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
				)
			}>
			{children}
		</Tab>
	);
}

export function TabDemo() {
	const [{ todos }, { onOpenModal }] = useContext(TodoContext);

	const completed = useMemo(() => todos.filter((todo) => todo.completed), [todos]);
	const incompleted = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);

	return (
		<div className="w-full">
			<header className="flex items-center justify-between mb-4">
				<h1
					className="w-full dark:text-white tracking-tight font-semibold text-3xl"
					aria-label="Tasks">
					<span>🚀📋✨</span>
				</h1>
				<ModalButton aria-label="Add New" onClick={onOpenModal}>
					<FiPlus />
				</ModalButton>
			</header>

			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-zinc-100/20 p-1">
					<TabButton>All</TabButton>
					<TabButton>Completed</TabButton>
					<TabButton>Todo</TabButton>
				</Tab.List>
				<Tab.Panels className="mt-2">
					<Tab.Panel>
						<List todos={todos} />
					</Tab.Panel>
					<Tab.Panel>
						<List todos={completed} />
					</Tab.Panel>
					<Tab.Panel>
						<List todos={incompleted} />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
