import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { getUserData } from "entities/User/model/selectors/getUserData/getUserData"
import React from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"
import { UpdateUserInfoType, UpdateUserInfoSchema } from "../model/types/UpdateUserInfo.types"
import useDialog from "../lib/useDialog/useDialog"
import { AlertWithButton } from "shared/elements/common/AlertWithButton"
import useUpdateUserInfo from "../api/useUpdateUserInfo/useUpdateUserInfo"
import { LoadingButton } from "@mui/lab"


const UpdateUserInfo = () => {
    const {t} = useTranslation("settings")
    const userData = useAppSelector(getUserData)
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<UpdateUserInfoType>({
        resolver: zodResolver(UpdateUserInfoSchema),
        defaultValues: {
            username: userData?.username ?? ""
        }
    })

    const {
        open,
        openDialog,
        closeDialog
    } = useDialog()

    const {
        updateUserInfo,
        isLoading,
        error,
        clearError
    } = useUpdateUserInfo(closeDialog)

    return (
        <React.Fragment>
            <Button 
                variant="contained" 
                size="small" 
                onClick={openDialog}
                aria-label="s show user info dialog"
            >
                {t("s_edit")}
            </Button>
            <Dialog 
                open={open} 
                component="form"
                onClose={closeDialog}
                onSubmit={handleSubmit(updateUserInfo)}
            >
                <DialogTitle sx={{mb: -1}}>{t("s_edit")}</DialogTitle>
                <DialogContent sx={{minWidth: 320}}>
                    <TextField
                        autoFocus
                        id="s_username"
                        label={t("s_username")}
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={{mt: 0}}
                        {...register("username")}
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message ?? ''}
                        aria-label="s username input"
                    />
                    <AlertWithButton 
                        sx={{mt: errors.username ? 1 : 2}}
                        open={Boolean(error)}
                        actionFunc={clearError}
                        type="close"
                        alertText={error}
                        severity="error"
                    />
                </DialogContent>
                <DialogActions sx={{mt: 0}}>
                    <Button color="error" onClick={closeDialog}>{t("s_cancel")}</Button>
                    <LoadingButton 
                        aria-label="update user info button"
                        variant="contained" 
                        color="success"
                        disabled={isLoading}
                        loading={isLoading}
                        sx={{mr: 2}}
                        type="submit"
                    >{t("s_save")}</LoadingButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default UpdateUserInfo