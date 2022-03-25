import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import { useRegisterMutation } from '@pwa-concept/modules/auth/graphql/mutations/Register'
import { RegisterInput } from '@pwa-concept/modules/graphql'

const useAuthRegister = () => {
    const [register] = useRegisterMutation()

    return async (input: RegisterInput): FeatureMutationHookReturnType<typeof useRegisterMutation, 'register'> => {
        const { data, errors } = await register({
            variables: {
                input,
            },
            ignoreResults: true,
        })

        return {
            data: data?.register,
            errors,
        }
    }
}

export default useAuthRegister
