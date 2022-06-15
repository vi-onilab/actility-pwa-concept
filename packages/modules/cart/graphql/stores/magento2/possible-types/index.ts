import { StorePossibleTypes } from '@pwa-concept/core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'

const possibleTypes: StorePossibleTypes<Magento2StorePossibleTypesKeys> = {
    CartAddressInterface: ['ShippingCartAddress', 'BillingCartAddress'],
    CartItemInterface: [
        'BundleCartItem',
        'ConfigurableCartItem',
        'DownloadableCartItem',
        'GiftCardCartItem',
        'SimpleCartItem',
        'VirtualCartItem',
    ],
}

export default possibleTypes
