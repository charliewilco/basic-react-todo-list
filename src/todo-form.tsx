import { Dialog } from "@headlessui/react";
import { useContext, useState } from "react";
import { TodoContext } from "./context";

export function TodoForm() {
	const [{ selected }, { onSubmit }] = useContext(TodoContext);
	const [_value, setValue] = useState(selected === null ? "" : selected.task);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const title = selected ? "Edit Todo" : "Add Todo";

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		onSubmit(_value);

		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<header className="flex justify-between p-4">
				<Dialog.Title
					as="h3"
					className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
					{title}
				</Dialog.Title>
				<button
					aria-label="Submit"
					className="text-sky-500 disabled:opacity-75 font-bold"
					type="submit"
					disabled={_value.length === 0}>
					Submit
				</button>
			</header>
			<div className="p-4">
				<div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
					<label
						htmlFor="name"
						className="block text-xs font-medium text-gray-900 dark:text-white">
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={_value}
						onChange={handleChange}
						className="block w-full border-0 p-0 text-gray-900 dark:bg-zinc-900 dark:text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
						placeholder="Drink some water"
					/>
				</div>
			</div>
		</form>
	);
}
