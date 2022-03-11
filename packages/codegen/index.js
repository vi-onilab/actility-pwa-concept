const { join, dirname } = require('path')
const { spawn } = require('child_process')

module.exports = async function () {
    const cliPath = join(dirname(require.resolve('@graphql-codegen/cli')), '..', '..', '.bin', 'graphql-codegen')

    const run = async ({ config, watch = false }) => {
        const args = [
            cliPath,
            '--config',
            config,
        ]

        if (watch) args.push('--watch')

        spawn('node', args, { stdio: 'inherit', cwd: dirname(config) })
    }

    return {
        run,
    }
}
