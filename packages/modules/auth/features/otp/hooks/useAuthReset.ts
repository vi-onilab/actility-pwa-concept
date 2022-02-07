import { useResetMutation, ResetMutationVariables } from '~modules/auth/graphql/mutations/Reset'

const useAuthReset = () => {
    const [reset] = useResetMutation()
    // TODO: need for check that hook after fix on backend
    return async ({ email, code }: ResetMutationVariables) => {
        return await reset({
            variables: {
                email,
                code,
            },
            ignoreResults: true,
        })
    }
}

export default useAuthReset
