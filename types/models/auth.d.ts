export declare const $auth: {
    readonly isToken: boolean;
    useIsToken: () => boolean;
    useToken: () => (string | ((newValue: string | null) => void) | null)[];
    getToken: () => string | null;
    setToken: (newValue: string | null) => void;
    reset(): void;
};
