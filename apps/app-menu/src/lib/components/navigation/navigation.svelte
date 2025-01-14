<script lang="ts">
  import NavLink from '../navlink/navlink.svelte';
</script>

<button
  class="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-label="Toggle navigation menu"
>
  ☰
</button>

<nav class="hidden md:flex space-x-20" aria-label="Main Navigation">
  <NavLink href="/animation">Animation</NavLink>
  <NavLink href="/branding">Branding</NavLink>
  <NavLink href="/illustration">Illustration</NavLink>
</nav>
  