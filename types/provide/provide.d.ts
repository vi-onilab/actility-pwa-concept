import { FC } from 'react';
import { ProvideId, Provides, ProvideToken } from '../types';
declare const useProvide: (token: ProvideToken, defaultValue?: unknown) => any;
declare const ProvideConstructor: (id: ProvideId, provides: Provides) => FC;
declare const Provide: {
    get: (id: ProvideId, token: ProvideToken) => any;
    use: (token: ProvideToken, defaultValue?: unknown) => any;
};
export { Provide, useProvide, };
export default ProvideConstructor;
