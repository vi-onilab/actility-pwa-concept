module.exports = (value) => {
    if (!value) return value

    return (
        value
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            .replace(
                /\s+(.)(\w*)/g,
                ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
            )
            .replace(/\w/, s => s.toUpperCase())
    )
}
