import { Visibility, VisibilityOff } from "@mui/icons-material";
import { 
    FormControl,  
    FormHelperText, 
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    OutlinedInputProps
} from "@mui/material"
import React from "react";
import { forwardRef, memo } from "react";

interface IShowPasswordProps extends OutlinedInputProps {
    label: string;
    errorMessage?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const ShowPassword = memo(forwardRef(({
    variant = 'outlined',
    label,
    errorMessage,
    sx,
    ...otherProps
}:IShowPasswordProps, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <FormControl
            variant={variant}
            sx={sx}
            
        >
            <InputLabel htmlFor={`show-password-${label}`}>
                {label}
            </InputLabel>

            <OutlinedInput
                ref={ref}
                id={`show-password-${label}`}
                error={errorMessage ? true : false}
                {...otherProps}
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? (
                                <VisibilityOff />
                            ) : (
                                <Visibility />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />

            {errorMessage && <FormHelperText error>
                {errorMessage}
            </FormHelperText>}
        </FormControl>
    )
}))

export default ShowPassword