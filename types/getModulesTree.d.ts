import { Module, ModuleProvider, Provides } from './types';
declare const getModulesTree: (rootModule: Module) => {
    providers: ModuleProvider[];
    provides: Provides;
};
export default getModulesTree;
