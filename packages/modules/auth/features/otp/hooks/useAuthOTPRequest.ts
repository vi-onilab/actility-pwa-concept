import { useRecoverByEmailMutation } from '~modules/auth/graphql/mutations/RecoverByEmail'

const useAuthOTPRequest = () => {
    const [recoverByEmailMutation, { loading }] = useRecoverByEmailMutation()

    return {
        recoverByEmailMutation,
        loading
    }
};

export default useAuthOTPRequest
