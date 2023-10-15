import { ListItem, ListItemAvatar, ListItemText, Skeleton } from "@mui/material"

const ConvItemSkeleton = () => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText 
                primary={<Skeleton variant="text" width={100} />}
            />
        </ListItem>
    )
}

export default ConvItemSkeleton