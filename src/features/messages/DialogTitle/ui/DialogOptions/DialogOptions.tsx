import { IconButton, IconButtonProps, Menu, MenuItem, Typography } from "@mui/material"
import React from "react"
import useCreateAnchor from "shared/hooks/MUI/useCreateAnchor"
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IAccountMenuProps extends Omit<IconButtonProps, 
    'onClick' | 'aria-control' | 'aria-haspopup' | 'aria-expanded'> {}

const DialogOptions = ({
    ...otherProps
}: IAccountMenuProps) => {

    const {
        anchorEl,
        open,
        handleClick,
        handleClose
    } = useCreateAnchor()

    return (
        <React.Fragment>
            <IconButton
                onClick={handleClick}
                aria-controls={open ? 'dialog-options' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                {...otherProps}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                aria-label="navbar-menu"
                anchorEl={anchorEl}
                id="navbar-menu"
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Typography variant="subtitle1" color="error" >
                        Block User
                    </Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default DialogOptions