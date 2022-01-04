const helpers = require('./helpers');
const prompts = require('./prompts');
const commands = require('./commands');

module.exports = (
	/** @type {import('plop').NodePlopAPI} */
	plop,
) => {
	plop.setWelcomeMessage('Hi! Select the command');

	Object.keys(helpers).forEach((name) => (
		plop.setHelper(name, helpers[name])
	));

	Object.keys(prompts).forEach((name) => (
		plop.setPrompt(name, prompts[name])
	));

	Object.keys(commands).forEach((name) => (
		plop.setGenerator(name, commands[name](plop))
	));
};
