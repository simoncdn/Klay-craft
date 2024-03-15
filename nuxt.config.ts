// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3001
	},
	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'shadcn-nuxt',
		'@nuxt/image',
		'@nuxtjs/supabase',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt'
	],
	supabase: {
		redirect: false
	},
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: true
	},
	shadcn: {
		componentDir: './components/ui'
	}
})
