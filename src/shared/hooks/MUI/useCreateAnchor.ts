import { useState } from "react";

const useCreateAnchor = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return {
        anchorEl,
        open,
        handleClick,
        handleClose
    }
}

export default useCreateAnchor