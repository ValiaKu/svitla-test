import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/main.js",
	output: {
		dir: "public",
		format: "esm", // Ensure you're using 'esm' format
		sourcemap: true,
	},
	plugins: [svelte(), terser()],
};
