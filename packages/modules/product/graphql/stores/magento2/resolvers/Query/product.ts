import { gql } from '@apollo/client'
import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const smartMerge = (target, source) => {
    const softMerge = { ...target, ...source }

    return (
        Object.keys(source).reduce((result, field) => {
            const value = softMerge?.[field]

            if (
                value === null ||
                value === undefined ||
                (typeof value === 'string' && !value?.length) ||
                (Array.isArray(value) && !value?.length) ||
                (typeof value === 'object' && !Object.keys(value)?.length)
            ) {
                result[field] = target?.[field]
            }

            return result
        }, softMerge)
    )
}

const product: QueryResolvers['product'] = async (_, { input }) => {
    const {
        id = null,
        url = null,
        sku = null,
        external = null,
    } = input || {}

    const { data: { products = null } = {} } = (
        await api.graphql(
            gql`
                query($filter: ProductAttributeFilterInput!) {
                    products(
                        filter: $filter
                    ) {
                        items {
                            ... ProductInterface
                        }
                    }
                }
            `,
        ).variableIf(external?.length > 0, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                ...external.reduce((result, { key, value }) => {
                    result[key] = value

                    return result
                }, {}),
            },
        })).variableIf(!!id, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                id: {
                    eq: id,
                },
            },
        })).variableIf(!!sku, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                sku: {
                    eq: sku,
                },
            },
        })).variableIf(!!url, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                url_key: {
                    eq: url,
                },
            },
        })).query()
    )

    if (!products?.items?.length) return null

    if (products?.length === 2) {
        const defaultValue = { configurable: null, simple: null }

        const { configurable, simple } = products?.items?.reduce((result, item) => {
            if (item?.__typename === 'SimpleProduct') {
                result.simple = item
            } else {
                result.configurable = item
            }

            return result
        }, defaultValue) || defaultValue

        return {
            __context: smartMerge(configurable, simple),
            __typename: 'Product',
        }
    }

    return {
        __context: products?.items?.[0],
        __typename: 'Product',
    }
}

export default product
