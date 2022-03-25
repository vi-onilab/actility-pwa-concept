import { Resolvers } from '@pwa-concept/modules/graphql'
import Query from './Query'
import Mutation from './Mutation'
import Cart from './Cart'
import CartCustomizableOptionsValue from './CartCustomizableOptionsValue'
import CartItemCustomizableOptions from './CartItemCustomizableOptions'
import CartItemPrices from './CartItemPrices'
import CartItems from './CartItems'
import CartMoney from './CartMoney'
import CartMoneyOnly from './CartMoneyOnly'
import CartProduct from './CartProduct'
import CartSelectedShippingMethod from './CartSelectedShippingMethod'
import CartShippingAddresses from './CartShippingAddresses'
import CartShippingAddressRegion from './CartShippingAddressRegion'
import CartShippingMethod from './CartShippingMethod'
import CartTotals from './CartTotals'

const resolvers: Resolvers = {
    Query,
    Mutation,
    Cart,
    CartCustomizableOptionsValue,
    CartItemCustomizableOptions,
    CartItemPrices,
    CartItems,
    CartMoney,
    CartMoneyOnly,
    CartProduct,
    CartSelectedShippingMethod,
    CartShippingAddresses,
    CartShippingAddressRegion,
    CartShippingMethod,
    CartTotals,
}

export default resolvers
