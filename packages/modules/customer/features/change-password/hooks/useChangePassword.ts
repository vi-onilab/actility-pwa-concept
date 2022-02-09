import { useChangePasswordMutation, ChangePasswordMutationVariables } from '~modules/customer/graphql/mutations/ChangePassword'

const useChangePassword = () => {
    const [changePassword] = useChangePasswordMutation()

    return async (newPassword: ChangePasswordMutationVariables['newPassword'], currentPassword: ChangePasswordMutationVariables['currentPassword']) => {
        return await changePassword({
            variables: { newPassword, currentPassword },
            ignoreResults: true,
        })
    }
}

export default useChangePassword
