import { Module } from './types';
import render from './render';
interface CreateFnOptions {
    root?: Parameters<typeof render>[1];
}
interface CreateFn {
    (module: Module, options?: CreateFnOptions): Promise<void>;
}
declare const create: CreateFn;
interface BootstrapEntryFn {
    (options: {
        create: typeof create;
    }): Promise<void>;
}
declare const bootstrap: (fn: BootstrapEntryFn) => Promise<void>;
export default bootstrap;
