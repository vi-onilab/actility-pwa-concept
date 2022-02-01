const env = (name: string): string | undefined => (
    process.env[`${name}_${process.env.STORE?.toUpperCase?.()}`] || process.env[name]
)

export default env
