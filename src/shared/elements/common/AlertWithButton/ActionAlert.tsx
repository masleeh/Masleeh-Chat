import { Alert, AlertProps, Button, Collapse, IconButton } from "@mui/material";
import { memo, useMemo } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface IActionAlertProps extends AlertProps {
    type: 'close' | 'function' | 'none',
    open: boolean;
    alertText: string;
    buttonText?: string;
    actionFunc?: () => void;
    disabled?: boolean;
}

const ActionAlert = memo(({
    type = 'none',
    open,
    buttonText = "undo",
    alertText = "Alert!",
    actionFunc,
    disabled,
    sx,
    ...otherProps
}:IActionAlertProps) => {

    const getButton = useMemo(() => {
        switch (type) {
        case "close":
            return (
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={actionFunc}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            )
        case "function":
            return (
                <Button disabled={Boolean(disabled)} color="inherit" size="small" onClick={actionFunc}>
                    {buttonText}
                </Button>
            )
        }
    }, [actionFunc, type, buttonText, disabled])

    return (
        <Collapse in={open} sx={{ width: '100%' }}>
            <Alert
                action={
                    getButton
                }
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    ...sx
                }}
                {...otherProps}
            >
                {alertText}
            </Alert>
        </Collapse>
    )
})

export default ActionAlert