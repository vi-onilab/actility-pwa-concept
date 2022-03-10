import { useChangePasswordMutation, ChangePasswordMutationVariables } from '@pwa-concept/modules/customer/graphql/mutations/ChangePassword'

const useCustomerChangePassword = () => {
    const [changePassword] = useChangePasswordMutation()

    return async (newPassword: ChangePasswordMutationVariables['newPassword'], currentPassword: ChangePasswordMutationVariables['currentPassword']) => {
        return await changePassword({
            variables: { newPassword, currentPassword },
            ignoreResults: true,
        })
    }
}

export default useCustomerChangePassword
