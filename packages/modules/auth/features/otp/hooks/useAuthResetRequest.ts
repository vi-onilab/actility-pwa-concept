import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import {
    ResetRequestMutationVariables,
    useResetRequestMutation,
} from '@pwa-concept/modules/auth/graphql/mutations/ResetRequest'

const useAuthResetRequest = () => {
    const [resetRequest] = useResetRequestMutation()

    return async (email: ResetRequestMutationVariables['email']): FeatureMutationHookReturnType<typeof useResetRequestMutation, 'resetRequest'> => {
        const { data, errors } = await resetRequest({
            variables: {
                email,
            },
            ignoreResults: true,
        })

        return {
            data: data?.resetRequest,
            errors,
        }
    }
}

export default useAuthResetRequest
