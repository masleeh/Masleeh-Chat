import { IconButton, IconButtonProps, ListItemIcon, Menu, MenuItem } from "@mui/material"
import { getUserData } from "entities/User/model/selectors/getUserData/getUserData";
import React from "react";
import { useSelector } from "react-redux";
import { AvatarEl } from "shared/elements/common/Avatar";
import useCreateAnchor from "shared/hooks/MUI/useCreateAnchor";
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useTranslation } from "react-i18next";

interface IAccountMenuProps extends Omit<IconButtonProps, 
    'onClick' | 'aria-control' | 'aria-haspopup' | 'aria-expanded'> {}

const AccountMenu = ({
    ...otherProps
}: IAccountMenuProps) => {
    const userData = useSelector(getUserData)
    const { t } = useTranslation(["auth"])

    const {
        anchorEl,
        open,
        handleClick,
        handleClose
    } = useCreateAnchor()

    return (
        <React.Fragment>
            <IconButton
                aria-label="icon-button with avatar"
                onClick={handleClick}
                aria-controls={open ? 'navbar-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                {...otherProps}
            >
                <AvatarEl name={userData?.username ?? 'U n'}/>
            </IconButton>

            <Menu
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
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {t("settings")}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {t("logout")}
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default AccountMenu