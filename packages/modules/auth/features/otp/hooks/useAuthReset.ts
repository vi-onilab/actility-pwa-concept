import { useResetMutation } from '~modules/auth/graphql/mutations/Reset'
import reset from '~modules/auth/graphql/resolvers/magento2/Mutation/reset'

const useAuthReset = () => {
    const [reset] = useResetMutation()
    //TODO: need for check that hook after fix on backend
    return async ({ email, code }) => {
        const res = await reset({
            variables: {
                email,
                code,
            },
            ignoreResults: true
        })

       return res
    }
};

export default useAuthReset
