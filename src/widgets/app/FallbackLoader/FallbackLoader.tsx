import { Box, CircularProgress } from '@mui/material'

const FallbackLoader = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", width: '100vw', height: '100vh' }}>
            <CircularProgress />
        </Box>
    )
}

export default FallbackLoader