module.exports = ({ isDevelopment }) => ({
	test: /\.[tj]sx?$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			env: {
				production: {
					plugins: [
						[
							'transform-react-remove-prop-types',
							{
								mode: 'remove',
								removeImport: true,
							},
						],
					],
				},
			},
			presets: [
				[
					'@babel/preset-typescript',
				],
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'usage',
						corejs: '3.8',
					},
				],
				[
					'@babel/preset-react',
					{
						runtime: 'automatic',
					},
				],
			],
			cacheDirectory: true,
			plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
		},
	},
});
