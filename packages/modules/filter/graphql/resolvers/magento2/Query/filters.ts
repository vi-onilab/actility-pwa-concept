import { Filter, FilterType, QueryResolvers } from '@pwa-concept/modules/graphql'
import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'

const EXCLUDE_ID = ['price']

const filters: QueryResolvers['filters'] = async (_, { input }) => {
    const { categoryId } = input

    const { data: { products = {} } = {} } = await (
        api.graphql(
            gql`
                query Products($filter: ProductAttributeFilterInput) {
                    products(
                        filter: $filter
                    ) {
                        aggregations {
                            attribute_code
                            label
                            options {
                                label
                                value
                            }
                        }
                        max_price
                        min_price
                    }
                }
            `,
        ).variableIf(
            !!categoryId,
            () => ({
                filter: {
                    category_id: {
                        eq: categoryId,
                    },
                },
            }),
        ).query()
    )

    const response: Filter[] = []

    if (products?.max_price !== products?.min_price && ![products?.min_price, products?.max_price].includes(undefined)) {
        response.push({
            id: `price-${products.min_price}_${products.max_price}`,
            // TODO: Translate me (i18n)
            name: 'Price',
            key: 'price',
            type: FilterType.Price,
            items: [
                {
                    id: `price-${products.min_price}`,
                    key: 'price',
                    // TODO: Translate me (i18n)
                    name: 'From',
                    value: products.min_price,
                    __typename: 'FilterItem',
                },
                {
                    id: `price-${products?.max_price}`,
                    key: 'price',
                    // TODO: Translate me (i18n)
                    name: 'To',
                    value: products.max_price,
                    __typename: 'FilterItem',
                },
            ],
            __typename: 'Filter',
        })
    }

    products?.aggregations?.forEach(({ attribute_code: id = null, label: name = null, options = [] } = {}) => {
        if (!EXCLUDE_ID.includes(id)) {
            response.push({
                id,
                name,
                key: id,
                type: FilterType.Checkbox,
                items: options?.map(({ label: name, value }) => ({
                    id: String(value),
                    name,
                    key: id,
                    value: String(value),
                    __typename: 'FilterItem',
                })),
                __typename: 'Filter',
            })
        }
    })

    return response
}

export default filters
