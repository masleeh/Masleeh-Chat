import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Link, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AuthFormWrapper } from 'shared/elements/auth/AuthFormWrapper';
import { RegisterFormSchema, RegisterFormType } from '../model/types/RegisterForm.types';
import ActionAlert from 'shared/elements/common/AlertWithButton/ActionAlert';
import { LoadingButton } from '@mui/lab';
import useSendRegisterData from '../api/useSendRegisterData';
import { memo } from 'react';

interface IRegisterFormProps {
    customAction: () => void;
}

const RegisterForm = memo(({
    customAction
}:IRegisterFormProps) => {
    const {t} = useTranslation(['auth'])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormType>({ resolver: zodResolver(RegisterFormSchema) })

    const {
        sendRegisterData,
        isLoading,
        error,
        clearError
    } = useSendRegisterData()

    return (
        <AuthFormWrapper title={t("registration")}>
            <Box
                component="form"
                noValidate
                sx={{ 
                    mt: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                onSubmit={handleSubmit(sendRegisterData)}
            >
                <TextField 
                    sx={{ mt: 2 }}
                    fullWidth
                    id="reg_username"
                    label={t("username")}
                    autoFocus
                    error={Boolean(errors.username)}
                    helperText={t(errors.username?.message as string || '')}
                    {...register("username")}
                />

                <TextField 
                    sx={{ mt: errors.username ? 1 : 2 }}
                    fullWidth
                    id="reg_password"
                    label={t("password")}
                    error={Boolean(errors.password)}
                    helperText={t(errors.password?.message as string || '')}
                    {...register("password")}
                />

                <TextField 
                    sx={{ mt: errors.password ? 1 : 2 }}
                    fullWidth
                    id="reg_confirm"
                    label={t("confirm")}
                    error={Boolean(errors.confirm)}
                    helperText={t(errors.confirm?.message as string || '')}
                    {...register("confirm")}
                />

                <ActionAlert 
                    aria-label="error-alert"
                    type="close"
                    severity="error"
                    open={Boolean(error)}
                    alertText={t(error)}
                    sx={{mt: errors.confirm ? 1 : 2}}
                    actionFunc={clearError}
                />

                <LoadingButton
                    sx={{ mt: error ? 2 : errors.password ? 1 : 2 }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    loading={isLoading}
                >{t("btn_register")}</LoadingButton>

                <Link 
                    component="button" 
                    type="button" 
                    onClick={customAction} 
                    sx={{mt: 2}}
                >{t("already_have_account")}</Link>
            </Box>
        </AuthFormWrapper>
    )
})

export default RegisterForm