<script lang="ts">
	let isChanged = false;

	function toggleChange() {
		isChanged = !isChanged;
	}
</script>

<header class="branding h-full border">
	<div class="flex h-full flex-col justify-between p-20">
		<nav aria-label="Main navigation" class="flex w-fit items-center gap-4">
			<div
				class="container {isChanged ? 'change' : ''}"
				role="button"
				tabindex="0"
				aria-expanded={isChanged}
				aria-label="Toggle navigation menu"
				on:click={toggleChange}
				on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? toggleChange() : null)}
			>
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
			<span class="text-3xl font-bold text-white">Menu</span>
			<ul class="hidden">
				<li>menu item 1</li>
				<li>menu item 2</li>
				<li>..</li>
			</ul>
		</nav>

		<div class="mb-20 mt-40 flex w-full items-center justify-between text-white">
			<span class="w-10">Summer collection 2025</span>
			<div>
				<a href="/">Next</a>
				<span class="inline-block h-0.5 bg-white align-middle 2xl:mx-10 2xl:w-20"></span>
				<a href="/">Previous</a>
			</div>
		</div>

		<h1 class="font-serif text-9xl leading-tight tracking-tighter text-primary xl:text-10xl">
			Summer 2025
		</h1>

		<div class="flex gap-8">
			<a
				href="/"
				aria-label="Visit our Facebook page"
				class="bg-slate-800 px-1 font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-slate-900"
				>Fb</a
			>
			<a
				href="/"
				aria-label="Visit our Pinterest page"
				class="bg-slate-800 px-1 font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-slate-900"
				>Pin</a
			>

			<a
				href="/"
				aria-label="Visit our LinkedIn page"
				class="bg-slate-800 px-1 font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-slate-900"
				>Lg</a
			>
		</div>
	</div>
</header>
