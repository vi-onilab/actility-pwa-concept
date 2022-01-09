import { Container, render } from 'react-dom';
import { CoreProvider } from '../providers';

export default function run(app: any, container: Container | HTMLElement) {
    if (container) {
        render((
            <CoreProvider>
                {app}
            </CoreProvider>
        ), container);
    }
};
