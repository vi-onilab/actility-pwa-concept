module.exports = ({ port }) => ({
	port,
	historyApiFallback: {
		disableDotRule: true,
	},
	open: true,
})