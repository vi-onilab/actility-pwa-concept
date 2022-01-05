const { resolve, join } = require('path');
const { readdirSync } = require('fs');

module.exports = () => ({
	description: 'Generating a JSON list of countries',
	prompts: [],
	actions: () => {
		const ROOT = __dirname.split('.cli')[0];

		const ICONS_PATH = ['media', 'countries'];

		const INPUT_ICONS_DIR = resolve(ROOT, 'public', ...ICONS_PATH);
		const OUTPUT_CONSTANT_FILE = resolve(ROOT, 'src', 'constants', 'json', 'countryIcons.json');
		const OUTPUT_ICONS_DIR = join('/', ...ICONS_PATH);

		const files = readdirSync(INPUT_ICONS_DIR);

		if (files.length) {
			const responseData = files.reduce((data, current) => {
				const code = current.split('.')[0].toUpperCase();
				const output = data;

				if (code) {
					output[code] = `${OUTPUT_ICONS_DIR}/${current}`;
				}

				return output;
			}, {});

			return [
				{
					type: 'modify',
					path: OUTPUT_CONSTANT_FILE,
					force: true,
					template: JSON.stringify(responseData),
				},
			];
		}

		return [];
	},
});
