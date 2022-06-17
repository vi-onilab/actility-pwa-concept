import { Resolvers } from '@pwa-concept/modules/graphql'

import Cart from './Cart'
import CartCustomizableOptionsValue from './CartCustomizableOptionsValue'
import CartItemCustomizableOptions from './CartItemCustomizableOptions'
import CartItemPrices from './CartItemPrices'
import CartItems from './CartItems'
import CartMoney from './CartMoney'
import CartMoneyOnly from './CartMoneyOnly'
import CartSelectedShippingMethod from './CartSelectedShippingMethod'
import CartShippingAddresses from './CartShippingAddresses'
import CartShippingAddressRegion from './CartShippingAddressRegion'
import CartShippingMethod from './CartShippingMethod'
import CartTotals from './CartTotals'
import Mutation from './Mutation'
import Query from './Query'

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
    CartSelectedShippingMethod,
    CartShippingAddresses,
    CartShippingAddressRegion,
    CartShippingMethod,
    CartTotals,
}

export default resolvers
