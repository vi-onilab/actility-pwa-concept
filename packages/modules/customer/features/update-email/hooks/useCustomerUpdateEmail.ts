import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import {
    UpdateEmailMutationVariables,
    useUpdateEmailMutation,
} from '@pwa-concept/modules/customer/graphql/mutations/UpdateEmail'

const useCustomerUpdateEmail = () => {
    const [updateEmail] = useUpdateEmailMutation()

    return async (
        email: UpdateEmailMutationVariables['email'],
        password: UpdateEmailMutationVariables['password'],
    ): FeatureMutationHookReturnType<typeof useUpdateEmailMutation, 'updateEmail'> => {
        const { data, errors } = await updateEmail({
            variables: { email, password },
            ignoreResults: true,
        })

        return {
            data: data?.updateEmail,
            errors,
        }
    }
}

export default useCustomerUpdateEmail
