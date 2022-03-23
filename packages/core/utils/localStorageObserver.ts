interface LocalStorageObserverFnInput {
    key: string
    newValue: string
    oldValue: string
}

const localStorageObserver = (key: string, fn: (input: LocalStorageObserverFnInput) => void) => {
    const handler = (event) => {
        if (event.storageArea === localStorage) {
            if (event.key === key) {
                fn({
                    key: event.key,
                    newValue: event.newValue,
                    oldValue: event.oldValue,
                })
            }
        }
    }

    const subscribe = () => {
        window.addEventListener('storage', handler)
    }

    const unsubscribe = () => {
        window.removeEventListener('storage', handler)
    }

    subscribe()

    return {
        subscribe,
        unsubscribe,
    }
}

export default localStorageObserver
