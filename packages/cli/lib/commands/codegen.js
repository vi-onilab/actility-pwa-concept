const glob = require('glob')
const { join } = require('path')
const Codegen = require('@pwa-concept/codegen')

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
    const codegen = await Codegen()

    const options = {
        cwd: process.cwd(),
        ignore: ['node_modules/**/*.*', '.pwa/**/*.*'],
    }

    glob(join('**', 'codegen.{yml,json,js}'), options, (err, files) => {
        files.forEach((file) => {
            codegen.run({
                config: join(process.cwd(), file),
                watch: 'watch' in args && args.watch,
            })
        })
    })
}
