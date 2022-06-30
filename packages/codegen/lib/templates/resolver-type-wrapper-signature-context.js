module.exports = `
type ResolverTypeWrapperSignatureContext<T = any, T2 = any> = {
    __context?: T
    __errors?: T2
};
type ResolverContext<T = any, T2 = any> = {
    context?: T
    errors?: T2
};
`
