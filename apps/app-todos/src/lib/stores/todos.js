import { writable } from 'svelte/store';

// Default initial todos
const defaultTodos = [
	{ text: 'Buy new sweatshort', completed: true },
	{ text: 'Read an article', completed: true },
	{ text: 'Write blog post', completed: false },
	{ text: "Watch 'Mr. Robot'", completed: false },
	{ text: 'Run', completed: false }
];

// Load todos from localStorage or use defaults
const storedTodos = typeof window !== 'undefined' && localStorage.getItem('todos');
const initialTodos = storedTodos ? JSON.parse(storedTodos) : defaultTodos;

// Create a writable store
export const todos = writable(initialTodos);

// Subscribe to the store and save changes to localStorage
todos.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('todos', JSON.stringify(value));
	}
});
