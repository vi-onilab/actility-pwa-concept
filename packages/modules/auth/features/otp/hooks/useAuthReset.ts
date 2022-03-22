import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import { ResetMutationVariables, useResetMutation } from '@pwa-concept/modules/auth/graphql/mutations/Reset'

const useAuthReset = () => {
    const [reset] = useResetMutation()
    // TODO: need for check that hook after fix on backend
    return async (
        {
            email,
            code,
        }: ResetMutationVariables): FeatureMutationHookReturnType<typeof useResetMutation, 'reset'> => {
        const { data, errors } = await reset({
            variables: {
                email,
                code,
            },
            ignoreResults: true,
        })

        return {
            data: data?.reset,
            errors,
        }
    }
}

export default useAuthReset
