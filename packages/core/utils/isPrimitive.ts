const isPrimitive = <T = any>(value: T): boolean => {
    if (typeof value === 'object') {
        return value === null
    }
    return typeof value !== 'function'
}

export default isPrimitive
