import { makeVar, useReactiveVar } from '@apollo/client'

const CURRENT_STORAGE_KEY = '_language'

const currentLanguage$ = makeVar(localStorage.getItem(CURRENT_STORAGE_KEY) || null)

export const $language = {
    get current() {
        return currentLanguage$()
    },
    set current(newValue) {
        if (newValue) {
            currentLanguage$(newValue)
            localStorage.setItem(CURRENT_STORAGE_KEY, newValue)
        }
    },
    get isCurrent() {
        return this.current?.length > 0
    },
    useCurrent: (): [string, (value: string) => void] => [
        useReactiveVar(currentLanguage$),
        (newValue) => {
            $language.current = newValue
        },
    ],

    fillFromCurrencySwitcherQuery(next) {
        if (!$language.isCurrent && next?.current_language_code) {
            $language.current = next?.current_language_code
        }
    },
}
