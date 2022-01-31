import useOnListener from './useOnListener'

const useOnWindowListener = (eventType: string, fn: () => void) => {
	useOnListener(window, eventType, fn)
}

export default useOnWindowListener
