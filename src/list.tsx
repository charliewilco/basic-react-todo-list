import { ListItem } from "./list-item";
import type { TodoItem } from "./todo-store";

export function List({
	emptyMessage = "No tasks here yet.",
	emptyTitle = "Nothing to see here!",
	isMutating = false,
	onCompleted,
	onRemove,
	onUndo,
	todos,
}: {
	emptyMessage?: string;
	emptyTitle?: string;
	isMutating?: boolean;
	onCompleted(id: number): void;
	onRemove(id: number): void;
	onUndo(id: number): void;
	todos: TodoItem[];
}) {
	return (
		<div className="todo-list-wrapper" aria-busy={isMutating}>
			{todos.length > 0 ? (
				<ul className="todo-list">
					{todos.map((todo) => (
						<ListItem
							isMutating={isMutating}
							key={todo.id}
							onCompleted={onCompleted}
							onRemove={onRemove}
							onUndo={onUndo}
							todo={todo}
						/>
					))}
				</ul>
			) : (
				<div className="empty-state">
					<h2 className="empty-state__title">{emptyTitle}</h2>
					<p className="empty-state__copy">{emptyMessage}</p>
				</div>
			)}
		</div>
	);
}
