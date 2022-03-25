import { StorePossibleTypes } from '@pwa-concept/core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'
import ProductInterface from './ProductInterface'
import CustomizableOptionInterface from './CustomizableOptionInterface'

const possibleTypes: StorePossibleTypes<Magento2StorePossibleTypesKeys> = {
    CustomizableOptionInterface,
    ProductInterface,
}

export default possibleTypes
