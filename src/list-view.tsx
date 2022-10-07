import { useContext } from "react";

import { Modal } from "./modal";
import { TodoForm } from "./todo-form";
import { TabDemo } from "./tabs";
import { TodoContext } from "./context";

export const ListView = () => {
	const [{ selected }, { onSubmit }] = useContext(TodoContext);

	return (
		<>
			<TabDemo />
			<Modal>
				<TodoForm
					title={selected ? "Edit Todo" : "Add Todo"}
					value={selected !== null ? selected.task : null}
					onSubmit={onSubmit}
				/>
			</Modal>
		</>
	);
};
