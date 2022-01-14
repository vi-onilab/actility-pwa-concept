import { FC, ReactElement } from 'react';
export declare type ProvideToken = string | symbol;
export declare type ProvideValue = any;
export declare type ProvideId = symbol;
export declare type Provides = Map<ProvideToken, ProvideValue>;
export declare type ModuleProvider = FC;
export interface ModuleProvide {
    use: ProvideToken;
    value: ProvideValue;
}
export interface Module {
    entry?: ReactElement;
    modules?: Module[];
    provides?: ModuleProvide[];
    providers?: ModuleProvider[];
}
export interface ModuleFn {
    (): Module;
}
