import { setContext } from '@apollo/client/link/context'
import { $auth } from '@pwa-concept/core/models'
import { makeVar } from "@apollo/client";
export const recaptchaToken = makeVar(null)

const authLink = setContext((_, { headers }) => {
    const token = $auth.getToken()
    const recaptcha = recaptchaToken()

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
            ...(recaptcha && {
                'X-ReCaptcha': recaptcha,
            }),
        },
    }
})

export default authLink
