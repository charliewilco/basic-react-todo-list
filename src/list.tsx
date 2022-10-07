import { classNames } from "./classnames";
import { ListItem } from "./list-item";
import type { TodoItem } from "./reducer";

export function List({ todos }: { todos: TodoItem[] }) {
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
