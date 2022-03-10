const glob = require('glob')
const { join, dirname } = require('path')
const { spawn } = require('child_process')

exports.command = 'codegen [watch]'
exports.desc = 'Run the codegen'
exports.builder = {
    watch: {
        alias: 'watch',
        describe: '',
        demand: false,
    },
}
exports.handler = async (args) => {
    const cliPath = join(dirname(require.resolve('@graphql-codegen/cli')), '..', '..', '.bin', 'graphql-codegen')

    const options = {
        cwd: process.cwd(),
        ignore: ['node_modules/**/*.*'],
    }

    glob(join('**', 'codegen.{yml,json,js}'), options, (err, files) => {
        files.forEach((file) => {
            const filePath = join(process.cwd(), file)
            const outArgs = [
                cliPath,
                '--config',
                filePath,
            ]

            if ('watch' in args && args.watch) outArgs.push('--watch')

            spawn('node', outArgs, { stdio: 'inherit', cwd: dirname(filePath) })
        })
    })
}
