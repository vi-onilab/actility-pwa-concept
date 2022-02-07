import { useLoginMutation } from '~modules/auth/graphql/mutations/Login'

const useAuthLogin = () => {
    const [logIn] = useLoginMutation()

    return async (email, password) => {
        await logIn({
            variables: { email, password }
        })
    }
};

export default useAuthLogin
