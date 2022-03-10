import { DocumentNode, FragmentDefinitionNode } from 'graphql/language/ast'
import { Kind } from 'graphql'
import { DeepWriteable } from '../types'

const parseCache = new Map()

const parseFragments = (fragments: Array<DeepWriteable<DocumentNode>>) => {
    if (parseCache.has(fragments)) return parseCache.get(fragments)

    const result = fragments?.reduce?.((response, current) => {
        current.definitions?.forEach((fragment: DeepWriteable<FragmentDefinitionNode>) => {
            if (fragment.kind === Kind.FRAGMENT_DEFINITION) {
                const name = fragment.typeCondition.name.value

                if (!name) return null
                if (!(name in response)) response[name] = []

                fragment.name.value = `${name}${response[name].length}`

                response[name].push(fragment)
            }
        })

        return response
    }, {})

    parseCache.set(fragments, result)

    return result
}

export default parseFragments
