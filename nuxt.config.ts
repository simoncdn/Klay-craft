// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3008,
	},
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: true,
	},
})
