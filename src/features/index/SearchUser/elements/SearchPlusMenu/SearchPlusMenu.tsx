import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import React from "react"
import GroupIcon from '@mui/icons-material/Group';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import useCreateAnchor from "shared/hooks/MUI/useCreateAnchor";
import { useTranslation } from "react-i18next";

const SearchPlusMenu = () => {
    const {t} = useTranslation(["conversations"])

    const {
        anchorEl,
        handleClick,
        handleClose,
        open
    } = useCreateAnchor()

    return (
        <React.Fragment>
            <IconButton color="primary" aria-label="show search plus menu" onClick={handleClick}>
                <AddCircleOutlineIcon fontSize='medium' />
            </IconButton>

            <Menu
                id="searchbar_plus_menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
            >
                <MenuItem>
                    <ListItemIcon>
                        <GroupIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{t("create_group_chat")}</ListItemText>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default SearchPlusMenu