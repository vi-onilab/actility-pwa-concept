const { join } = require('path')
const { spawnSync } = require('child_process')

exports.command = 'generate [type]'
exports.desc = 'Generator'
exports.builder = {
    type: {
        alias: 't',
        describe: 'Pass the type',
        demand: false,
    },
}
exports.handler = async ({ type }) => {
    const args = ['--plopfile', join(__dirname, '..', 'plop', 'index.js')]

    if (type) args.push(type)

    spawnSync(join(process.argv[1], '..', 'plop'), args, { stdio: 'inherit', cwd: process.cwd() })
}
