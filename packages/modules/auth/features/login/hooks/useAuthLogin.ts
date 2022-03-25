import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import { LoginMutationVariables, useLoginMutation } from '@pwa-concept/modules/auth/graphql/mutations/Login'

const useAuthLogin = () => {
    const [logIn] = useLoginMutation()

    return async (
        email: LoginMutationVariables['email'],
        password: LoginMutationVariables['password'],
    ): FeatureMutationHookReturnType<typeof useLoginMutation, 'login'> => {
        const { data, errors } = await logIn({
            variables: { email, password },
            ignoreResults: true,
        })

        return {
            data: data?.login,
            errors,
        }
    }
}

export default useAuthLogin
