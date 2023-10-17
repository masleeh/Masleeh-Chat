import { Avatar, AvatarProps } from "@mui/material"

function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

interface IAvatarEl extends Omit<AvatarProps, "children"> {
    name: string;
}

const AvatarEl = ({
    name,
    sx,
    ...otherProps
}:IAvatarEl) => {
    return (
        <Avatar 
            {...otherProps} 
            sx={{
                ...sx,
                bgcolor: stringToColor(name)
            }}
            children={otherProps.src ? undefined : name.split(' ').slice(0, 2).map(item => item[0]).join('')}
        />
    )
}

export default AvatarEl