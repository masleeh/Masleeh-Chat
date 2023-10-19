import { useSelector } from 'react-redux';
import { getTheme } from 'entities/Theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

const AppThemeProvider = ({children}: {children: ReactNode}) => {
    const themeOptions = useSelector(getTheme)
    const theme = createTheme(themeOptions)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider