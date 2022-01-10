import { FC, ReactElement } from 'react'

export interface Module {
    entry?: ReactElement
    modules?: Module[]
    providers?: FC[]
}

export interface ModuleFn {
    (): Module
}
