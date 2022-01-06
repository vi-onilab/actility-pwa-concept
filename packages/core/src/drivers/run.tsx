import { Container, render } from 'react-dom';
import { AppProvider } from '../providers';

export default function run(app: any, container: Container | HTMLElement) {
    if (container) {
        render((
            <AppProvider>
                {app}
            </AppProvider>
        ), container);
    }
};
