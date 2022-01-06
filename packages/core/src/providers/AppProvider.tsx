import { PropsWithChildren, ReactElement } from 'react' 

interface Props {

}

export default function AppProvider({ children }: PropsWithChildren<Props>): ReactElement {
    return (
        <>
            {children}
        </>
    );
}