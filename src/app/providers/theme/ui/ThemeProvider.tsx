import { useSelector } from 'react-redux';
import { getTheme } from 'entities/Theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import useSetTheme from '../lib/useSetTheme';

const AppThemeProvider = ({children}: {children: ReactNode}) => {
    const themeOptions = useSelector(getTheme)
    const theme = createTheme(themeOptions)

    const {
        setTheme
    } = useSetTheme()

    useEffect(() => {
        setTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider