import {
    makeVar, useReactiveVar, ReactiveVar
} from '@apollo/client'
import localStorageObserver from '../utils/localStorageObserver'

const STORAGE_KEY = 'cartId'

const cartIdModel: ReactiveVar<string | null> = makeVar<string | null>(localStorage.getItem(STORAGE_KEY))

const localStorageObservable = localStorageObserver(STORAGE_KEY, ({ newValue }) => {
    if (newValue !== cartIdModel()) {
        cartIdModel(newValue)
    }
})

export const $cart = {
    get id(): string {
        return cartIdModel()
    },
    set id(newValue) {
        localStorageObservable.unsubscribe()

        if (newValue) {
            cartIdModel(newValue)
            localStorage.setItem(STORAGE_KEY, newValue)
        } else {
            cartIdModel(null)
            localStorage.removeItem(STORAGE_KEY)
        }

        localStorageObservable.subscribe()
    },
    get isId() {
        return $cart.id?.length > 0
    },
    useId: (): [string | null, ((newValue: string) => void)] => [
        useReactiveVar(cartIdModel),
        (newValue) => {
            $cart.id = newValue
        },
    ],

    reset() {
        this.id = null
    },
}
