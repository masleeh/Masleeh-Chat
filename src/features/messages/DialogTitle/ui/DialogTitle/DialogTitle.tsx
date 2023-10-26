import { Grid, Paper, Skeleton, Stack, Typography } from "@mui/material"
import { memo, useMemo } from "react"
import { AvatarEl } from "shared/elements/common/Avatar"
import DialogOptions from "../DialogOptions/DialogOptions"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"
import { getDialogState } from "entities/Participant"
import useMapDialogData from "../../lib/useMapDialogData/useMapDialogData"

const DialogTitleBox = memo(() => {
    const {
        isLoading,
        partData,
        _inited
    } = useAppSelector(getDialogState)

    const {
        title, subtitle
    } = useMapDialogData(partData)

    const dialogInfo = useMemo(() => (
        <Grid container spacing={1}>
            <Grid item sx={{
                display: 'flex'
            }}>
                <AvatarEl name={title} />
            </Grid>
            <Grid item sx={{mt: -0.5}}>
                <Typography variant="subtitle1" display="block" gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{mt: -1, mb: -1}} variant="caption" display="block" gutterBottom>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    ), [title, subtitle])

    const dialogSkeleton = useMemo(() => (
        <Grid container spacing={1}>
            <Grid item sx={{
                display: 'flex'
            }}>
                <Skeleton variant="circular" width={40} height={40} />
            </Grid>
            <Grid item sx={{ml: -0.2}}>
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: 200 }} />
                <Skeleton variant="text" sx={{ fontSize: '0.5rem', width: 140 }} />
            </Grid>
        </Grid>
    ), [])

    return (
        <Paper
            elevation={4} 
            sx={{
                p: "8px 16px", 
                borderRadius: 0,
                height: 56,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            {(isLoading || !_inited) ? dialogSkeleton : dialogInfo}

            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
            >
                <DialogOptions />
            </Stack>
        </Paper>
    )
})

export default DialogTitleBox