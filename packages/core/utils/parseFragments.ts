import { DocumentNode, FragmentDefinitionNode, visit } from 'graphql'
import { DeepWriteable } from '~core/types'

const parseFragments = (fragments: DocumentNode[]) => {
    const data = JSON.parse(JSON.stringify(fragments))

    const response = {}

    data?.forEach?.((nodes) => {
        visit(nodes, {
            FragmentDefinition: {
                enter(node: FragmentDefinitionNode) {
                    const fragment = node as unknown as DeepWriteable<FragmentDefinitionNode>
                    const name = fragment.typeCondition.name.value

                    if (name) {
                        if (!(name in response)) response[name] = []
                        fragment.name.value = `${name}${response[name].length}`

                        response[name].push(fragment)
                    }
                },
            },
        })
    })

    return response
}

export default parseFragments
