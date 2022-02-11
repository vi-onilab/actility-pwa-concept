import { useUpdateEmailMutation, UpdateEmailMutationVariables } from '~modules/customer/graphql/mutations/UpdateEmail'

const useCustomerUpdateEmail = () => {
    const [updateEmail] = useUpdateEmailMutation()

    return async (email: UpdateEmailMutationVariables['email'], password: UpdateEmailMutationVariables['password']) => {
        const { data: { updateEmail: { email: newEmail } } } = await updateEmail({
            variables: { email, password },
            ignoreResults: true,
        })

        return newEmail
    }
}

export default useCustomerUpdateEmail
