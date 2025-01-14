<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex items-center justify-center h-screen">
	<Navigation />
</div>


  
{@render children()}
