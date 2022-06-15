import { StoreFragments } from '@pwa-concept/core'

import BillingCartAddress from './BillingCartAddress.graphql'
import Cart from './Cart.graphql'
import CartAddressInterface from './CartAddressInterface.graphql'
import CartItemInterface from './CartItemInterface.graphql'
import CartPrices from './CartPrices.graphql'
import SelectedCustomizableOption from './SelectedCustomizableOption.graphql'
import ShippingCartAddress from './ShippingCartAddress.graphql'

const fragments: StoreFragments = [
    BillingCartAddress,
    Cart,
    CartAddressInterface,
    CartItemInterface,
    CartPrices,
    SelectedCustomizableOption,
    ShippingCartAddress,
]

export default fragments
