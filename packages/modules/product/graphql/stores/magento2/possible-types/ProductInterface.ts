import { StorePossibleTypes } from '~core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'

const ProductInterface: StorePossibleTypes<Magento2StorePossibleTypesKeys>['ProductInterface'] = [
    'VirtualProduct',
    'SimpleProduct',
    'DownloadableProduct',
    'BundleProduct',
    'GroupedProduct',
    'ConfigurableProduct',
]

export default ProductInterface
