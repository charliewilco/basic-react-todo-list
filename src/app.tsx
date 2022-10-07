import { Modal } from "./modal";
import { TodoForm } from "./todo-form";
import { TabDemo } from "./tabs";
import { Provider } from "./context";

export function App() {
	return (
		<Provider>
			<TabDemo />
			<Modal>
				<TodoForm />
			</Modal>
		</Provider>
	);
}
