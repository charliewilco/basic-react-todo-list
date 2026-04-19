import { useActionState, useContext, useEffect, useState } from "react";

import { TodoContext } from "./context";
import type { TodoItem } from "./todo-store";

interface TodoFormProps {
	isMutating: boolean;
	onSubmit(value: string): Promise<void>;
	selectedTodo: TodoItem | null;
}

export function TodoForm({ isMutating, onSubmit, selectedTodo }: TodoFormProps) {
	const [{ isModalOpen }] = useContext(TodoContext);
	const [value, setValue] = useState(selectedTodo === null ? "" : selectedTodo.task);
	const [errorMessage, submitAction, isSubmitting] = useActionState(
		async (_previousState: string | null, formData: FormData) => {
			const nextValue = String(formData.get("name") ?? "").trim();

			if (nextValue.length === 0) {
				return "Name is required.";
			}

			try {
				await onSubmit(nextValue);
				return null;
			} catch (error) {
				return error instanceof Error ? error.message : "Could not save todo.";
			}
		},
		null,
	);

	useEffect(() => {
		if (!isModalOpen) {
			setValue("");
			return;
		}

		setValue(selectedTodo === null ? "" : selectedTodo.task);
	}, [isModalOpen, selectedTodo]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const title = selectedTodo ? "Edit Todo" : "Add Todo";
	const isPending = isSubmitting || isMutating;

	return (
		<form className="todo-form" action={submitAction}>
			<header className="todo-form__header">
				<div>
					<p className="todo-form__eyebrow">Quick Entry</p>
					<h2 id="todo-form-title" className="todo-form__title">
						{title}
					</h2>
				</div>
				<button
					aria-label="Submit"
					className="todo-form__submit"
					type="submit"
					disabled={value.trim().length === 0 || isPending}>
					Save
				</button>
			</header>
			<div className="todo-form__body">
				<div className="todo-form__field">
					<label htmlFor="name" className="todo-form__label">
						Title
					</label>
					<input
						autoFocus
						className="todo-form__input"
						id="name"
						name="name"
						onChange={handleChange}
						placeholder="Draft release notes"
						type="text"
						value={value}
					/>
					{errorMessage ? (
						<p className="todo-form__error" role="alert">
							{errorMessage}
						</p>
					) : null}
				</div>
			</div>
		</form>
	);
}
