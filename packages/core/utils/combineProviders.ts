import { createElement, ReactElement } from 'react'
import { ModuleProvider } from '../types'

const combineProviders = (element: ReactElement, providers?: ModuleProvider[]): ReactElement => (
    providers?.length ? (
        providers.reduceRight<ReactElement>((children, current) => (
            createElement(
                current,
                {},
                children,
            )
        ), element)
    ) : element
)

export default combineProviders
