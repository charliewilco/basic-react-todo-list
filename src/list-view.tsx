import { useReducer, useMemo, Fragment } from "react";
import { Tab } from "@headlessui/react";

import { Dialog } from "@reach/dialog";
import { ListItem } from "./list-item";
import { TodoForm } from "./todo-form";
import { type Action, type TodoItem, reducer, INITIAL_LIST, TodoActions } from "./reducer";

interface IListProps {
	todos: TodoItem[];
	dispatch: (value: Action) => void;
}

const List = ({ todos, dispatch }: IListProps) => {
	const handleEdit = (id: number) => dispatch({ type: TodoActions.EDIT_TODO, id });
	const handleRemove = (id: number) => dispatch({ type: TodoActions.REMOVE_TODO, id });
	const handleUpdate = (id: number, task: string) =>
		dispatch({ type: TodoActions.UPDATE_TODO, id, payload: task });
	const handleUndo = (id: number) => dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id });
	const handleCompleted = (id: number) =>
		dispatch({ type: TodoActions.MARK_AS_COMPLETED, id });
	return (
		<div>
			<ul className="List">
				{todos.length > 0 ? (
					todos.map((t) => (
						<ListItem
							key={t.id}
							todo={t}
							onEdit={handleEdit}
							onRemove={handleRemove}
							onUpdate={handleUpdate}
							onUndo={handleUndo}
							onCompleted={handleCompleted}
						/>
					))
				) : (
					<div>
						<h2>Nothing to see here!</h2>
					</div>
				)}
			</ul>
			<div className="ActionTray">
				<button
					className="Button"
					type="button"
					onClick={() =>
						dispatch({
							type: TodoActions.OPEN_MODAL,
						})
					}>
					Add New
				</button>
			</div>
		</div>
	);
};

export const ListView = () => {
	const [{ todos, selected, modalOpen }, dispatch] = useReducer(reducer, {
		modalOpen: false,
		selected: null,
		currentFilter: "All",
		todos: INITIAL_LIST,
	});

	const completed = useMemo(() => todos.filter((todo) => todo.completed), [todos]);
	const incompleted = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);

	return (
		<>
			<Tab.Group>
				<Tab.List>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button className={selected ? "bg-blue-500 text-white" : "bg-white text-black"}>
								All
							</button>
						)}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button className={selected ? "bg-blue-500 text-white" : "bg-white text-black"}>
								Completed
							</button>
						)}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button className={selected ? "bg-blue-500 text-white" : "bg-white text-black"}>
								Todo
							</button>
						)}
					</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						{" "}
						<List dispatch={dispatch} todos={todos} />
					</Tab.Panel>
					<Tab.Panel>
						<List dispatch={dispatch} todos={completed} />
					</Tab.Panel>
					<Tab.Panel>
						<List dispatch={dispatch} todos={incompleted} />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>

			<Dialog
				aria-label={selected ? "Edit Todo Form" : "Create New Todo Form"}
				isOpen={modalOpen}
				onDismiss={() =>
					dispatch({
						type: TodoActions.DISMISS_MODAL,
					})
				}>
				<TodoForm
					value={selected !== null ? selected.task : null}
					onSubmit={(value) =>
						selected !== null
							? dispatch({
									type: TodoActions.UPDATE_TODO,
									payload: value,
									id: selected.id,
							  })
							: dispatch({ type: TodoActions.ADD_TODO, payload: value })
					}
				/>
			</Dialog>
		</>
	);
};
