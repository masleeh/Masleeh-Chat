import { ListItem, ListItemAvatar, ListItemText, Skeleton } from "@mui/material"

const ConvItemSkeleton = () => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText 
                primary={<Skeleton variant="text" width={150} />}
                secondary={<Skeleton variant="text" width={250} />}
            />
        </ListItem>
    )
}

export default ConvItemSkeleton