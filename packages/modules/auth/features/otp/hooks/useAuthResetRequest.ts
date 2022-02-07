import { useResetRequestMutation } from '~modules/auth/graphql/mutations/ResetRequest'

const useAuthResetRequest = () => {
    const [resetRequest] = useResetRequestMutation()

    return async (email) => {
        const { data } = await resetRequest({
            variables: {
                email
            },
            ignoreResults: true,
        })
        
        return data
    }
};

export default useAuthResetRequest
