import { ExtendUtils, ExtendUtilsTypes } from '../types'

const resolveExtendUtilsType = (...items: any[]): ExtendUtilsTypes | undefined => {
    return items.reduce((result, item) => {
        if (result) return result

        if (Array.isArray(item)) return ExtendUtilsTypes.Array
        if (typeof item === 'object') return ExtendUtilsTypes.Object

        return result
    }, undefined)
}

const extend: ExtendUtils = {
    concat: (source, add, defaultValue = undefined, type = undefined) => {
        if (!source && !add) return defaultValue

        const resolvedType = type || resolveExtendUtilsType(source, add, defaultValue)

        switch (resolvedType) {
            case ExtendUtilsTypes.Array:
                return [
                    ...(source as any[] || []),
                    ...(add as any[] || []),
                ]

            case ExtendUtilsTypes.Object:
                return {
                    ...(source || {}),
                    ...(add || {}),
                }

            default:
                return defaultValue
        }
    },
}

export default extend
