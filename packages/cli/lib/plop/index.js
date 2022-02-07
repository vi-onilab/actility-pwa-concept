const directory = require('inquirer-directory')
const { readdirSync } = require('fs')
const { join } = require('path')

const prompts = {
    directory,
}

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop,
) => {
    plop.setWelcomeMessage('Hi! Select the command')

    Object.entries(prompts).forEach(([name, prompt]) => (
        plop.setPrompt(name, prompt)
    ))

    readdirSync(join(__dirname, 'generators')).forEach((name) => {
        plop.setGenerator(name, require(join(__dirname, 'generators', name))(plop))
    })
}
