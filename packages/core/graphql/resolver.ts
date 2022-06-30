const resolver = (fn: any) => (
    {
        __context = null,
        __errors = null,
        ...data
    } = {},
    variables,
    context,
    ...args
) => (
    fn(
        data,
        variables,
        {
            ...context,
            context: __context,
            errors: __errors,
        },
        ...args,
    )
)

export default resolver
