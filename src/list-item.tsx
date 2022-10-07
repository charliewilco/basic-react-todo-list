import { TodoItem } from "./reducer";
import { FiEdit3, FiCheckCircle, FiTrash2 } from "react-icons/fi";
import { classNames } from "./classnames";
import { TodoContext } from "./context";
import { useCallback, useContext } from "react";

interface ListItemProps {
	todo: TodoItem;
}

export function ListItem(props: ListItemProps) {
	const [, { onEdit, onCompleted, onRemove, onUndo }] = useContext(TodoContext);
	const handleEdit = useCallback(() => onEdit(props.todo.id), [onEdit, props.todo.id]);
	const handleRemove = useCallback(() => onRemove(props.todo.id), [onRemove, props.todo.id]);
	const handleUndo = useCallback(() => onUndo(props.todo.id), [onUndo, props.todo.id]);
	const handleCompleted = useCallback(
		() => onCompleted(props.todo.id),
		[onCompleted, props.todo.id]
	);

	const handleClick = useCallback(() => {
		if (props.todo.completed) {
			return handleUndo();
		} else {
			return handleCompleted();
		}
	}, [props.todo.completed, handleUndo, handleCompleted]);

	return (
		<li className="py-4 px-2 dark:text-white">
			<div className="flex">
				<button
					className={classNames("flex-0 mr-2", props.todo.completed ? "text-green-400" : "")}
					onClick={handleClick}>
					<FiCheckCircle size={18} />
				</button>

				<div className="flex-1 flex justify-between">
					<div>
						{props.todo.completed ? (
							<span>
								<b className="text-green-400 mb-2">Completed!</b>{" "}
								<span className="line-through italic">{props.todo.task}</span>
							</span>
						) : (
							<span>{props.todo.task}</span>
						)}
					</div>

					<div>
						<button onClick={handleRemove} className="mr-2" aria-label="Remove Todo">
							<FiTrash2 size={18} />
						</button>
						<button
							disabled={props.todo.completed}
							onClick={handleEdit}
							aria-label="Edit Todo">
							<FiEdit3 size={18} />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}
