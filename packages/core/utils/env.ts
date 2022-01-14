const env = (name: string) => (
	process.env[`${name}_${process.env.STORE?.toUpperCase?.()}`] || process.env[name]
)

export default env
