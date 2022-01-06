import ReactDOM from 'react-dom';
import { AppProvider } from '../providers';

export default function run(app: any, container: ReactDOM.Container) {
    ReactDOM.render((
        <AppProvider>
            {app}
        </AppProvider>
    ), container);  
};
