<script>
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';

	export let newTodo = '';
	export let addTodo;

	let scale = tweened(1, { duration: 200, easing: quintOut });

	function handleSubmit() {
		addTodo();
		scale.set(0.9);
		setTimeout(() => scale.set(1), 200);
	}

	function clearInput() {
		newTodo = '';
		// Focus back on the input field
		document.getElementById('todo-input').focus();
	}
</script>

<div class="relative flex w-full">
	<label for="todo-input" class="sr-only">Add Task</label>
	<input
		type="text"
		bind:value={newTodo}
		placeholder="Add Task"
		id="todo-input"
		class="block w-full border-slate-300 m-5 p-3
                placeholder-slate-300 focus:outline-none focus:border-emerald-300 focus:ring-emerald-300"
	/>
	<!-- Clear Button -->
	{#if newTodo}
		<button
			on:click={clearInput}
			aria-label="Clear input"
			class="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 rounded-full p-1"
		>
			×
		</button>
	{/if}
</div>
<button
	on:click={handleSubmit}
	aria-live="polite"
	transition:fly={{ y: 20, duration: 300 }}
	style="transform: scale({$scale});"
	class="absolute -bottom-5 left-1/2 -ml-12 py-1.5 px-10 rounded-3xl shadow-md bg-primary text-white font-semibold hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-1 focus:ring-4 focus:ring-emerald-300 active:scale-95 transition-all duration-300 text-lg"
	>Add</button
>
