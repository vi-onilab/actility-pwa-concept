import { module } from '@pwa-concept/core'
import { PROVIDE_CMS_MODULE_REPLACE } from './tokens'
import { CmsGetRoute } from './features'
import { CmsModuleReplaceProvide } from './types'
import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

interface CMSModuleConfigureOptions {
    replace?: CmsModuleReplaceProvide
}

const CMSModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
    graphqlPolicies: {
        Query: {
            fields: {
                cms: {
                    read(existing, { args, toReference }) {
                        return toReference({
                            id: args?.id,
                            __typename: 'Cms',
                        })
                    },
                },
            },
        },
    },
    routes: [
        {
            path: '*',
            element: CmsGetRoute,
        },
    ],
    configure({ replace = {} }: CMSModuleConfigureOptions) {
        return {
            provides: [
                ...(this.provides || []),
                {
                    use: PROVIDE_CMS_MODULE_REPLACE,
                    value: replace,
                },
            ],
        }
    },
}))

export default CMSModule
