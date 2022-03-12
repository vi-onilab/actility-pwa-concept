const generate = require('./generate')

exports.command = 'make [type]'
exports.desc = generate.desc
exports.builder = generate.builder
exports.handler = generate.handler
