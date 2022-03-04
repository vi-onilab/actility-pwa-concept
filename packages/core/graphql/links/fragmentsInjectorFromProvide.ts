import { ApolloLink } from '@apollo/client'
import { Provide } from '~core/provide'
import parseStoreFragments from '~core/graphql/parseStoreFragments'
import { visit, FragmentSpreadNode, ASTNode } from 'graphql'
import { DeepWriteable, ProvideToken } from '~core/types'
import { ASTVisitor } from 'graphql/language/visitor'
import { FragmentDefinitionNode } from 'graphql/language/ast'

const fragmentsInjectorFromProvide = (provide: ProvideToken) => {
    return new ApolloLink((operation, forward) => {
        const provideValue = Provide.first(provide)

        if (provideValue) {
            const fragmentsValue = parseStoreFragments(provideValue)

            const selectedFragments = new Set()

            const ast = {
                FragmentSpread: {
                    enter: (node: DeepWriteable<FragmentSpreadNode>, key, parent: ASTNode[]) => {
                        const fragments: FragmentDefinitionNode[] = fragmentsValue?.[node?.name?.value]

                        if (fragments?.length > 0) {
                            selectedFragments.add(fragments)

                            const [first, ...otherFragments] = fragments
                            if (first) node.name.value = first.name.value

                            const nodePreparedToClone = JSON.stringify(node)

                            otherFragments?.forEach?.(({ name }) => {
                                const cloneNode: DeepWriteable<FragmentSpreadNode> = JSON.parse(nodePreparedToClone)

                                cloneNode.name.value = name.value

                                parent.push(cloneNode as unknown as FragmentSpreadNode)
                            })
                        }
                    },
                },
            }

            visit(operation.query, ast as ASTVisitor)

            if (selectedFragments.size > 0) {
                const definitions = operation.query.definitions as unknown as Array<DeepWriteable<FragmentDefinitionNode>>

                selectedFragments.forEach((items: Array<DeepWriteable<FragmentDefinitionNode>>) => {
                    items.forEach((item) => definitions.push(item))
                })
            }
        }

        return forward(operation)
    })
}

export default fragmentsInjectorFromProvide
