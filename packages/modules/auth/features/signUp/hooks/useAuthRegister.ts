import { useRegisterMutation } from '~modules/auth/graphql/mutations/Register'
import { RegisterInput } from '~modules/graphql'

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
