<script lang="ts">
    import { page } from '$app/stores';
    export let href:string = "";
    export let current: boolean = false; 
  </script>
  
  <a
    href={href}
    aria-current={current ? "page" : undefined}
    class="
        group flex flex-col items-center 
        text-4xl font-medium tracking-wide  
        hover:text-active transition-colors duration-500 ease-in-out 
        { $page.url.pathname === href ? 'text-active' : 'text-link' }"
  >
    <slot></slot>
    <span
    class="h-2 rounded mt-8 bg-primary transition-all duration-500 ease-in-out group-hover:w-7/12
    { $page.url.pathname === href  ? 'w-7/12' : 'w-0' }"
  ></span>
  </a>