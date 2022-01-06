import { PropsWithChildren, ReactElement } from 'react' 

interface AppProviderProps {

}

export default function AppProvider({ children }: PropsWithChildren<AppProviderProps>): ReactElement {
    return (
        <>
            {children}
        </>
    );
}