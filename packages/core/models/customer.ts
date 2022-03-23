import { makeVar, useReactiveVar } from '@apollo/client'

const customerModel = makeVar({})

const setCustomer = (newValue = null) => {
    if (newValue) {
        customerModel({
            ...customerModel(),
            ...newValue,
        })
    } else {
        customerModel({})
    }
}

export const $customer = {
    useAuthCustomer: () => [
        useReactiveVar(customerModel),
        setCustomer,
    ],
    setCustomer,
    removeCustomer: () => customerModel({}),

    reset () {
        customerModel({})
    },
}
