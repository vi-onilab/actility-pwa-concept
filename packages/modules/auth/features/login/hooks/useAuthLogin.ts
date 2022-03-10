import { useLoginMutation, LoginMutationVariables } from '@pwa-concept/modules/auth/graphql/mutations/Login'

const useAuthLogin = () => {
    const [logIn] = useLoginMutation()

    return async (email: LoginMutationVariables['email'], password: LoginMutationVariables['password']) => {
        await logIn({
            variables: { email, password },
        })
    }
}

export default useAuthLogin
