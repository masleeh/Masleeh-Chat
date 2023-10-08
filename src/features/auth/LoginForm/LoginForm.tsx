import { Box, Link, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LoadingButton from "@mui/lab/LoadingButton";
import { AuthFormWrapper } from 'shared/elements/auth/AuthFormWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, LoginFormType } from './LoginForm.types';
import useSendLoginData from './utils/useSendLoginData';
import ActionAlert from 'shared/elements/common/AlertWithButton/ActionAlert';
import { memo } from 'react';

interface ILoginFormProps {
    customAction: () => void;
}

const LoginForm = memo(({
    customAction
}:ILoginFormProps) => {
    const {t} = useTranslation(['auth'])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) })

    const {
        sendLoginData,
        isLoading,
        error,
        clearError
    } = useSendLoginData()

    return (
        <AuthFormWrapper title={t("authorization")}>
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
                onSubmit={handleSubmit(sendLoginData)}
            >
                <TextField 
                    sx={{ mt: 2 }}
                    fullWidth
                    id="auth_username"
                    label={t("username")}
                    autoComplete="name"
                    autoFocus
                    error={Boolean(errors.username)}
                    helperText={t(errors.username?.message as string || '')}
                    {...register("username")}
                />

                <TextField 
                    sx={{ mt: errors.username ? 1 : 2 }}
                    fullWidth
                    id="auth_password"
                    label={t("password")}
                    autoComplete="password"
                    error={Boolean(errors.password)}
                    helperText={t(errors.password?.message as string || '')}
                    {...register("password")}
                />

                <ActionAlert 
                    type="close"
                    severity='error'
                    open={Boolean(error)}
                    alertText={t(error)}
                    actionFunc={clearError}
                    sx={{mt: 2}}
                />

                <LoadingButton
                    sx={{ mt: error ? 2 : errors.password ? 1 : 2 }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    loading={isLoading}
                >{t("btn_login")}</LoadingButton>

                <Link 
                    component="button" 
                    type="button"
                    onClick={customAction} 
                    sx={{mt: 2}}
                >{t("dont_have_an_account")}</Link>
            </Box>
        </AuthFormWrapper>
    )
})

export default LoginForm