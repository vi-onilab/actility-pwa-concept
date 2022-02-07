import useOnListener from './useOnListener'

const useOnDocumentListener = (eventType: string, fn: () => void): void => {
    useOnListener(document, eventType, fn)
}

export default useOnDocumentListener
