import ReactDOM from 'react-dom/client'
import App from 'app/App'
import { StoreProvider } from 'app/providers/store'
import { ErrorBoundary } from 'app/providers/error'
import "shared/config/i18n/i18n"
import { AppThemeProvider } from 'app/providers/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <ErrorBoundary>
            <AppThemeProvider>
                <App />
            </AppThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
)
