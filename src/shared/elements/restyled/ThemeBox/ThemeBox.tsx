import { Box, BoxProps } from '@mui/material';
import {  styled } from '@mui/material/styles';


const ThemeBoxEl = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.60))'
}))

interface IThemeBoxProps extends BoxProps {}

const ThemeBox = ({
    ...otherProps
}:IThemeBoxProps) => {
    return (
        <ThemeBoxEl {...otherProps}/> 
    )
}

export default ThemeBox