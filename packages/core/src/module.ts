import { Module, ModuleFn } from './types'

const module = (fn: ModuleFn): Module => fn()

export default module
