import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import {
    ChangePasswordMutationVariables,
    useChangePasswordMutation,
} from '@pwa-concept/modules/customer/graphql/mutations/ChangePassword'

const useCustomerChangePassword = () => {
    const [changePassword] = useChangePasswordMutation()

    return async (
        newPassword: ChangePasswordMutationVariables['newPassword'],
        currentPassword: ChangePasswordMutationVariables['currentPassword'],
    ): FeatureMutationHookReturnType<typeof useChangePasswordMutation, 'changePassword'> => {
        const { data, errors } = await changePassword({
            variables: { newPassword, currentPassword },
            ignoreResults: true,
        })

        return {
            data: data?.changePassword,
            errors,
        }
    }
}

export default useCustomerChangePassword
