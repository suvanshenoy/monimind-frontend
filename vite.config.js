import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": "./",
			"@page": resolve(__dirname, "./page"),
			"@layout": resolve(__dirname, "./layout"),
			"@component": resolve(__dirname, "./component"),
			"@store": resolve(__dirname, "./store"),
		},
	},
	server: {
		port: 3000,
	},
});
