import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface TodoFormProps {
	title?: string;
	value: string | null;
	onSubmit(value: string): void;
}

export const TodoForm = ({ value, title, onSubmit }: TodoFormProps) => {
	const [_value, setValue] = useState(value === null ? "" : value);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

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
};
