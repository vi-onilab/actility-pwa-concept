import { useEffect } from 'react'

type UseOnListenerElementType = HTMLElement | Window | Document

const useOnListener = (element: UseOnListenerElementType, eventType: string, fn: () => void): void => {
    useEffect(() => {
        element.addEventListener(eventType, fn)

        return () => {
            element.removeEventListener(eventType, fn)
        }
    }, [element, eventType, fn])
}

export default useOnListener
