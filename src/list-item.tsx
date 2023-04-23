import { TodoItem } from "./reducer";
import { FiEdit3, FiCheckCircle, FiTrash2 } from "react-icons/fi";
import { classNames } from "./classnames";
import { TodoContext } from "./context";
import { useCallback, useContext } from "react";

interface ListItemProps {
	todo: TodoItem;
}

export function ListItem({ todo: { id, completed, task } }: ListItemProps) {
	let [, actions] = useContext(TodoContext);
	let handleEdit = useCallback(() => actions.onEdit(id), [actions, id]);
	let handleRemove = useCallback(() => actions.onRemove(id), [actions, id]);
	let handleUndo = useCallback(() => actions.onUndo(id), [actions, id]);
	let handleCompleted = useCallback(() => actions.onCompleted(id), [actions, id]);

	let handleClick = useCallback(() => {
		if (completed) {
			return handleUndo();
		} else {
			return handleCompleted();
		}
	}, [completed, handleUndo, handleCompleted]);

	return (
		<li className="py-4 px-2 dark:text-white">
			<div className="flex">
				<button
					className={classNames("flex-0 mr-2", completed ? "text-green-400" : "")}
					onClick={handleClick}>
					<FiCheckCircle size={18} />
				</button>

				<div className="flex-1 flex justify-between">
					<div>
						{completed ? (
							<span>
								<b className="text-green-400 mb-2">Completed!</b>{" "}
								<span className="line-through italic">{task}</span>
							</span>
						) : (
							<span>{task}</span>
						)}
					</div>

					<div>
						<button onClick={handleRemove} className="mr-2" aria-label="Remove Todo">
							<FiTrash2 size={18} />
						</button>
						<button disabled={completed} onClick={handleEdit} aria-label="Edit Todo">
							<FiEdit3 size={18} />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}
