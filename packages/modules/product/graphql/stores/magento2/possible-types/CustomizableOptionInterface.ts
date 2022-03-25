import { StorePossibleTypes } from '@pwa-concept/core'
import { Magento2StorePossibleTypesKeys } from '@pwa-concept/stores/magento2/graphql'

const CustomizableOptionInterface: StorePossibleTypes<Magento2StorePossibleTypesKeys>['CustomizableOptionInterface'] = [
    'CustomizableAreaOption',
    'CustomizableDateOption',
    'CustomizableCheckboxOption',
    'CustomizableDropDownOption',
    'CustomizableFieldOption',
    'CustomizableFileOption',
    'CustomizableMultipleOption',
    'CustomizableRadioOption',
]

export default CustomizableOptionInterface
