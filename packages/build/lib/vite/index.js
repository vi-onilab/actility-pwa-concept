const { createServer, build } = require('vite')
const { join } = require('path')

module.exports = {
	start: async ({ port }) => {
		const server = await createServer({
			configFile: join(__dirname, 'vite.config.ts'),
			server: {
				port,
			},
		})

		await server.listen()

		server.printUrls()
	},
	build: async () => {
		await build({
			configFile: join(__dirname, 'vite.config.ts'),
		})
	},
	analyze: async () => {

	},
}
