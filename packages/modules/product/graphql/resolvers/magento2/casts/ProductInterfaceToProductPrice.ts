import { ProductPrice } from '~modules/graphql'

const ProductInterfaceToProductPrice = (item): ProductPrice => {
    const priceRange = item?.price_range

    const maximumPrice = priceRange?.maximum_price
    const minimumPrice = priceRange?.minimum_price
    const isRange = minimumPrice?.final_price?.value !== maximumPrice?.final_price?.value

    const current = minimumPrice?.final_price
    const initial = minimumPrice?.final_price

    return {
        badges: [],
        current: {
            currency: current?.currency,
            value: current?.value,
            __typename: 'Money',
        },
        initial: {
            currency: initial?.currency,
            value: initial?.value,
            __typename: 'Money',
        },
        isRange,
        __typename: 'ProductPrice',
    }
}

export default ProductInterfaceToProductPrice
