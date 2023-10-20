import { Button, CircularProgress, styled } from "@mui/material";
import { useTranslation } from "react-i18next"
import useGetFile from "../lib/useGetFile/useGetFile";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadProfilePic = () => {
    const {t} = useTranslation('settings')
    const {
        handleChangeFile,
        isLoading,
        loadProgress
    } = useGetFile()

    return (
        <Button 
            variant="contained"
            startIcon={
                isLoading ? (
                    <CircularProgress size={20} variant="determinate" value={loadProgress} />
                ) : (
                    <CloudUploadIcon />
                )
            }
            disabled={isLoading}
            component="label"
        >
            {t("upload_pic_button")}
            <VisuallyHiddenInput
                aria-label="upload profile pic input" 
                type="file"
                accept="image/jpeg"
                onChange={handleChangeFile}
            />
        </Button>
    )
}

export default UploadProfilePic