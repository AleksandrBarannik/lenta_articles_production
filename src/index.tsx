import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/styles/Index.scss';
import './shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import { ErrorBoundary } from 'app/providers/ErrorBoundery';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
