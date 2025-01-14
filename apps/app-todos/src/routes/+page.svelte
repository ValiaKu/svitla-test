<script>
	import { todos } from '$lib/stores/todos';
	import DateDisplay from '$lib/components/DateDisplay.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import AddTodo from '$lib/components/AddTodo.svelte';
	import { get } from 'svelte/store';

	let currentDate = new Date();
	let newTodo = '';

	function addTodo() {
		if (newTodo.trim()) {
			todos.update((current) => [...current, { text: newTodo, completed: false }]);
			newTodo = '';
		}
	}

	function toggleCompletion(index) {
		todos.update((current) =>
			current.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
		);
	}
</script>

<main class="flex items-center justify-center h-screen py-12">
	<div class="relative flex flex-col w-popup max-h-full mx-auto pb-8 shadow-md bg-white">
		<DateDisplay {currentDate} />
		<TodoList {todos} {toggleCompletion} />
		<AddTodo bind:newTodo {addTodo} />
	</div>
</main>

<style>
</style>
