import { useRenewAccessTokenMutation } from '~modules/auth/graphql/mutations/RenewAccessToken'

const useAuthOTPVerify = () => {
    const [renewAccessToken, { loading }] = useRenewAccessTokenMutation()

    return {
        renewAccessToken,
        loading
    }
};

export default useAuthOTPVerify
