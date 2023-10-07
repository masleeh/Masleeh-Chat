import ReactDOM from 'react-dom/client'
import App from 'app/App'
import { StoreProvider } from 'app/providers/store'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/error'
import "shared/config/i18n/i18n"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
