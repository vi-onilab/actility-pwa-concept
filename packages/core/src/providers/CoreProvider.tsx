import { PropsWithChildren, ReactElement } from 'react' 

interface CoreProviderProps {

}

export default function CoreProvider({ children }: PropsWithChildren<CoreProviderProps>): ReactElement {
    return (
        <>
            {children}
        </>
    );
}