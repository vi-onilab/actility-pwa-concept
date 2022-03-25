
const resolver = (fn: any) => async ({ __context = null, ...data } = {}, variables, context, ...args) => {
    return await fn(data, variables, { ...context, context: __context }, ...args)
}

export default resolver
