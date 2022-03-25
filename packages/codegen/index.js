const { join, dirname } = require('path')
const { spawn } = require('child_process')
const { renameSync } = require('fs')

module.exports = async function () {
    const currentGraphQLPath = require.resolve('graphql')
    const currentGraphQLPathFolder = `${currentGraphQLPath.split('graphql/')[0]}graphql/`
    const isExternal = currentGraphQLPath !== require.resolve('graphql', { paths: [process.cwd()] })

    const path = require.resolve('@graphql-codegen/cli', { paths: [process.cwd()] })
    const cliPath = join(dirname(path), '..', '..', '.bin', 'graphql-codegen')

    const run = async ({ config, watch = false }) => {
        const args = [
            cliPath,
            '--config',
            config,
        ]

        if (watch) args.push('--watch')

        if (isExternal) {
            try {
                // FIXME: Hack for multiple node_modules ("graphql" package find by glob)
                renameSync(currentGraphQLPathFolder, currentGraphQLPathFolder.replace(/graphql(\/?)/igm, '__gql_temp$1'))
            } catch {
            }
        }

        const child = spawn('node', args, {
            stdio: 'inherit', cwd: dirname(config), env: { ...process.env, NODE_ENV: 'production' },
        })

        if (isExternal) {
            try {
                child.on('exit', () => {
                    // FIXME: Hack for multiple node_modules ("graphql" package find by glob)
                    renameSync(currentGraphQLPathFolder.replace(/graphql(\/?)/igm, '__gql_temp$1'), currentGraphQLPathFolder)
                })
            } catch {
            }
        }
    }

    return {
        run,
    }
}
