import { useCallback, useContext } from "react";
import { FiCheckCircle, FiEdit3, FiTrash2 } from "react-icons/fi";

import { TodoContext } from "./context";
import type { TodoItem } from "./todo-store";

interface ListItemProps {
	isMutating: boolean;
	onCompleted(id: number): void;
	onRemove(id: number): void;
	onUndo(id: number): void;
	todo: TodoItem;
}

export function ListItem({ isMutating, onCompleted, onRemove, onUndo, todo }: ListItemProps) {
	const [, { onEdit }] = useContext(TodoContext);
	const handleEdit = useCallback(() => onEdit(todo.id), [onEdit, todo.id]);
	const handleRemove = useCallback(() => onRemove(todo.id), [onRemove, todo.id]);
	const handleUndo = useCallback(() => onUndo(todo.id), [onUndo, todo.id]);
	const handleCompleted = useCallback(() => onCompleted(todo.id), [onCompleted, todo.id]);

	const handleClick = useCallback(() => {
		if (todo.completed) {
			return handleUndo();
		}

		return handleCompleted();
	}, [handleCompleted, handleUndo, todo.completed]);

	return (
		<li className="todo-item">
			<div className="todo-item__content">
				<button
					className={`icon-button icon-button--status${
						todo.completed ? " icon-button--completed" : ""
					}`}
					disabled={isMutating}
					onClick={handleClick}>
					<FiCheckCircle size={18} />
				</button>

				<div className="todo-item__details">
					<div className="todo-item__copy">
						<span
							className={`todo-item__task${todo.completed ? " todo-item__task--completed" : ""}`}>
							{todo.task}
						</span>
						{todo.completed ? (
							<span className="todo-item__meta">
								<span className="todo-item__status">Completed!</span> 
							</span>
						) : (
							<span className="todo-item__meta">Ready when you are</span>
						)}
					</div>

					<div className="todo-item__actions">
						<button
							aria-label="Remove Todo"
							className="icon-button"
							disabled={isMutating}
							onClick={handleRemove}>
							<FiTrash2 size={18} />
						</button>
						<button
							aria-label="Edit Todo"
							className="icon-button"
							disabled={todo.completed || isMutating}
							onClick={handleEdit}>
							<FiEdit3 size={18} />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}
