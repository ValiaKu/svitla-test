<script>
	import { get } from 'svelte/store';
	import { fly } from 'svelte/transition';
	export let todos;
	export let toggleCompletion;
</script>

<ul class="list-none overflow-auto mt-4">
	{#each $todos as todo, index}
		<li class="flex items-center m-4" transition:fly={{ x: 100, duration: 400 }}>
			<span class="text-base {todo.completed ? 'line-through text-stone-300' : 'text-gray-500'}">
				{todo.text}
			</span>
			<button on:click={() => toggleCompletion(index)} class="ml-auto transform scale-125">
				{#if todo.completed}
					🙂
				{:else}
					🫥
				{/if}
			</button>
		</li>
	{/each}
</ul>
