// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3008,
	},	
	modules: [
		'@nuxtjs/google-fonts', 
		'@nuxtjs/tailwindcss',
	],
	googleFonts: {
		download: true,
		overwriting: true,
		outputDir: '/assets/fonts/',
		fontsDir: '/assets/fonts/',
		families: {
			roboto: [100, 300, 400, 500, 700, 900],
		}
	},
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: true,
	},
})

