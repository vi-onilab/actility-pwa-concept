import { StorePossibleTypes } from '@pwa-concept/core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'
import ProductInterface from './ProductInterface'

const possibleTypes: StorePossibleTypes<Magento2StorePossibleTypesKeys> = {
    ProductInterface,
}

export default possibleTypes
