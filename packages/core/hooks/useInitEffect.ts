import { useEffect, EffectCallback, DependencyList } from 'react'

const useInitEffect = (effect: EffectCallback, deps: DependencyList = []): void => {
    // eslint-disable-next-line
    useEffect(effect, deps)
}

export default useInitEffect
