import { DocumentNode } from '@apollo/client'
import { ASTNode, FragmentSpreadNode, visit } from 'graphql'
import { FragmentDefinitionNode } from 'graphql/language/ast'
import parseFragments from './parseFragments'
import { DeepWriteable } from '~core/types'

const cache = new Map<DocumentNode, DocumentNode>()

const injectFragments = (query: DocumentNode, fragments) => {
    if (cache.has(query)) return cache.get(query)

    if (fragments) {
        const deepCloneQuery = JSON.parse(JSON.stringify(query))
        const fragmentsValue = parseFragments(fragments)

        const selectedFragments = new Set()
        const existFragments = new Set()
        const definitions = deepCloneQuery.definitions as unknown as Array<DeepWriteable<FragmentDefinitionNode>>

        visit(deepCloneQuery, {
            FragmentDefinition: {
                enter(node: FragmentDefinitionNode) {
                    existFragments.add(node.name.value)
                },
            },
        })

        visit(deepCloneQuery, {
            FragmentSpread: {
                enter: (node: FragmentSpreadNode, key, parent: ASTNode[]) => {
                    const fragments: FragmentDefinitionNode[] = fragmentsValue?.[node?.name?.value]

                    if (fragments?.length > 0) {
                        const [first, ...otherFragments] = fragments

                        if (first) {
                            if (existFragments.has(node.name.value)) {
                                otherFragments.push(first)
                            } else {
                                (node as any).name.value = first.name.value

                                if (!selectedFragments.has(first)) {
                                    definitions.push(first as any)
                                    selectedFragments.add(first)
                                }
                            }
                        }

                        const nodePreparedToClone = JSON.stringify(node)

                        otherFragments?.forEach?.((item) => {
                            const cloneNode: DeepWriteable<FragmentSpreadNode> = JSON.parse(nodePreparedToClone)

                            cloneNode.name.value = item?.name.value

                            parent.push(cloneNode as unknown as FragmentSpreadNode)

                            if (!selectedFragments.has(item)) {
                                definitions.push(item as any)
                                selectedFragments.add(item)
                            }
                        })
                    }
                },
            },
        })

        cache.set(query, deepCloneQuery)

        return deepCloneQuery
    }

    return query
}

export default injectFragments
