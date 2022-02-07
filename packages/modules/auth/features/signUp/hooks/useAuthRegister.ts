import { useRegisterMutation } from '~modules/auth/graphql/mutations/Register'

const useAuthRegister = () => {
    const [register] = useRegisterMutation()
   
    return async (input) => {
        await register({
            variables: {
                input: {
                    ...input
                }
            }
        })
    }
};

export default useAuthRegister
