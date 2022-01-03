const ISSUER_REGEX = /\.[tj]sx?$/;
const TEST_REGEX = /\.svg$/;

const OUTPUT_PATH = 'assets/svg';

module.exports = () => ([
	{
		test: TEST_REGEX,
		issuer: {
			and: [ISSUER_REGEX],
		},
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					svgo: true,
					dimensions: false,
				},
			},
			{
				loader: 'file-loader',
				options: {
					outputPath: OUTPUT_PATH,
				},
			},
		],
	},
	{
		test: TEST_REGEX,
		issuer: {
			not: [ISSUER_REGEX],
		},
		type: 'asset/resource',
		generator: {
			filename: `${OUTPUT_PATH}/[hash][ext][query]`,
		},
	}
]);
