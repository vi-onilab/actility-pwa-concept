import { StorePossibleTypes } from '@pwa-concept/core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'

const possibleTypes: StorePossibleTypes<Magento2StorePossibleTypesKeys> = {
    RoutableInterface: [
        'BundleProduct',
        'CategoryTree',
        'CmsPage',
        'ConfigurableProduct',
        'DownloadableProduct',
        'GroupedProduct',
        'SimpleProduct',
        'VirtualProduct',
    ],
}

export default possibleTypes
