export default {
	Query: {
		getCmsRoute: async (...args) => {
			console.log(args)

			return {
				id: 1,
			}
		}
	},
}
