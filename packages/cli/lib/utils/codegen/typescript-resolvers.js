const {
    plugin,
    TypeScriptResolversPluginConfig,
    TypeScriptResolversVisitor,
} = require('@graphql-codegen/typescript-resolvers')

module.exports = {
    plugin(schema, documents, config, info) {
        const response = plugin(schema, documents, config, info)

        response.content = response.content.replace(/(export )(type) (\w+(<[\w\s,{}=\[\]']+>)?) (=)( {)/gim, '$1interface $3$6')

        return response
    },
    TypeScriptResolversVisitor,
    TypeScriptResolversPluginConfig,
}
