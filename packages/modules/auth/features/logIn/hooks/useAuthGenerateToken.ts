import { useGetAccessTokenMutation } from '~modules/auth/graphql/mutations/GetAccessToken'

const useAuthGenerateToken = () => {
	const [logIn, { loading }] = useGetAccessTokenMutation()

    return {
        logIn,
        loading
    }
};

export default useAuthGenerateToken
