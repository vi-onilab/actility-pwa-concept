import { ApolloLink } from '@apollo/client'
import { Provide } from '~core/provide'
import { PROVIDE_GRAPHQL_STORE_FRAGMENTS } from '~core/graphql'
import parseStoreFragments from '~core/graphql/parseStoreFragments'
import { visit, FragmentSpreadNode, ASTNode } from 'graphql'
import { DeepWriteable } from '~core'
import { ASTVisitor } from 'graphql/language/visitor'
import { FragmentDefinitionNode } from 'graphql/language/ast'

const storeFragments = new ApolloLink((operation, forward) => {
    const provideValue = Provide.first(PROVIDE_GRAPHQL_STORE_FRAGMENTS)
    const storeFragmentsValue = parseStoreFragments(provideValue)

    const selectedStoreFragments = new Set()

    const ast = {
        FragmentSpread: {
            enter: (node: DeepWriteable<FragmentSpreadNode>, key, parent: ASTNode[]) => {
                const storeFragment: FragmentDefinitionNode[] = storeFragmentsValue?.[node?.name?.value]

                if (storeFragment?.length > 0) {
                    selectedStoreFragments.add(storeFragment)

                    const [first, ...otherFragments] = storeFragment
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

    if (selectedStoreFragments.size > 0) {
        const definitions = operation.query.definitions as unknown as Array<DeepWriteable<FragmentDefinitionNode>>

        selectedStoreFragments.forEach((items: Array<DeepWriteable<FragmentDefinitionNode>>) => {
            items.forEach((item) => definitions.push(item))
        })
    }

    return forward(operation)
})

export default storeFragments
