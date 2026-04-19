import { deleteDB, openDB, type DBSchema, type IDBPDatabase } from "idb";

/** A todo item returned to the UI layer. */
export interface TodoItem {
	completed: boolean;
	id: number;
	task: string;
}

interface TodoRecord {
	completed: boolean;
	id?: number;
	task: string;
}

interface TodoDatabase extends DBSchema {
	meta: {
		key: string;
		value: boolean;
	};
	todos: {
		key: number;
		value: TodoRecord;
	};
}

export const TODO_DATABASE_NAME = "basic-react-todo-list";

const TODO_DATABASE_VERSION = 1;
const TODO_META_STORE_NAME = "meta";
const TODO_STORE_NAME = "todos";
const SEEDED_KEY = "seeded";

const INITIAL_TODOS = [
	{ completed: false, task: "get lunch" },
	{ completed: false, task: "Check Flight" },
] as const satisfies ReadonlyArray<Pick<TodoItem, "completed" | "task">>;

let databasePromise: Promise<IDBPDatabase<TodoDatabase>> | null = null;

/** Reuses a single IndexedDB connection for the lifetime of the session. */
function getDatabase() {
	if (databasePromise !== null) {
		return databasePromise;
	}

	databasePromise = openDB<TodoDatabase>(TODO_DATABASE_NAME, TODO_DATABASE_VERSION, {
		upgrade(database) {
			if (!database.objectStoreNames.contains(TODO_STORE_NAME)) {
				database.createObjectStore(TODO_STORE_NAME, {
					autoIncrement: true,
					keyPath: "id",
				});
			}

			if (!database.objectStoreNames.contains(TODO_META_STORE_NAME)) {
				database.createObjectStore(TODO_META_STORE_NAME);
			}
		},
		blocking() {
			void closeTodoDatabase();
		},
	});

	return databasePromise;
}

/** Seeds the database once so the app has meaningful initial state. */
async function ensureSeeded(database: IDBPDatabase<TodoDatabase>) {
	const isSeeded = await database.get(TODO_META_STORE_NAME, SEEDED_KEY);

	if (isSeeded) {
		return;
	}

	const transaction = database.transaction(
		[TODO_META_STORE_NAME, TODO_STORE_NAME],
		"readwrite",
	);
	const todoStore = transaction.objectStore(TODO_STORE_NAME);
	const metaStore = transaction.objectStore(TODO_META_STORE_NAME);

	await Promise.all([
		...INITIAL_TODOS.map((todo) => todoStore.add(todo)),
		metaStore.put(true, SEEDED_KEY),
		transaction.done,
	]);
}

/** Returns all todos sorted from newest to oldest. */
export async function getTodos() {
	const database = await getDatabase();

	await ensureSeeded(database);

	const todos = await database.getAll(TODO_STORE_NAME);

	return todos
		.filter((todo): todo is TodoItem => typeof todo.id === "number")
		.sort((left, right) => right.id - left.id);
}

/**
 * Persists a new todo item and returns the created record.
 *
 * @param task The user-provided task label.
 * @returns The newly created todo item with its generated ID.
 */
export async function createTodo(task: string) {
	const database = await getDatabase();

	await ensureSeeded(database);

	const id = await database.add(TODO_STORE_NAME, {
		completed: false,
		task,
	});

	return {
		completed: false,
		id: Number(id),
		task,
	} satisfies TodoItem;
}

/**
 * Replaces the task text for an existing todo.
 *
 * @param id The todo ID to update.
 * @param task The next task label.
 * @returns The updated todo record.
 * @throws {Error} When the todo does not exist.
 */
export async function updateTodo(id: number, task: string) {
	const database = await getDatabase();
	const currentTodo = await database.get(TODO_STORE_NAME, id);

	if (!currentTodo || typeof currentTodo.id !== "number") {
		throw new Error("Todo not found.");
	}

	const nextTodo = {
		...currentTodo,
		id: currentTodo.id,
		task,
	} satisfies TodoItem;

	await database.put(TODO_STORE_NAME, nextTodo);

	return nextTodo;
}

/**
 * Removes a todo from IndexedDB.
 *
 * @param id The todo ID to delete.
 */
export async function removeTodo(id: number) {
	const database = await getDatabase();

	await database.delete(TODO_STORE_NAME, id);
}

/**
 * Updates the completion state for an existing todo.
 *
 * @param id The todo ID to update.
 * @param completed Whether the todo should be marked complete.
 * @returns The updated todo record.
 * @throws {Error} When the todo does not exist.
 */
export async function setTodoCompleted(id: number, completed: boolean) {
	const database = await getDatabase();
	const currentTodo = await database.get(TODO_STORE_NAME, id);

	if (!currentTodo || typeof currentTodo.id !== "number") {
		throw new Error("Todo not found.");
	}

	const nextTodo = {
		...currentTodo,
		completed,
		id: currentTodo.id,
	} satisfies TodoItem;

	await database.put(TODO_STORE_NAME, nextTodo);

	return nextTodo;
}

/** Closes the cached IndexedDB connection so tests and upgrades can start fresh. */
export async function closeTodoDatabase() {
	if (databasePromise === null) {
		return;
	}

	const database = await databasePromise;
	database.close();
	databasePromise = null;
}

/** Deletes the IndexedDB database after first closing any open connection. */
export async function resetTodoDatabase() {
	await closeTodoDatabase();
	await deleteDB(TODO_DATABASE_NAME);
}
