import { useRegisterMutation } from '@pwa-concept/modules/auth/graphql/mutations/Register'
import { RegisterInput } from '@pwa-concept/modules/graphql'

const useAuthRegister = () => {
    const [register] = useRegisterMutation()

    return async (input: RegisterInput) => {
        await register({
            variables: {
                input,
            },
        })
    }
}

export default useAuthRegister
