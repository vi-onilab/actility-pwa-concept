#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { join } = require('path')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
    .commandDir(join(__dirname, 'lib', 'commands'))
    .demandCommand()
    .help()
    .argv