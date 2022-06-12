/// An UserEntry for common usecase.

import { VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';
import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Divider } from "@mui/material"
import { User } from "../generated/graphql"

export default (props: { user: null | undefined | { createdAt: string, name: string, credential?: any, avatarImageUrl?: string | undefined | null}}) => {
    const user = props.user
    const verified = user?.credential

    return (
        <>
            <ListItem button
                secondaryAction={
                    verified ? (<IconButton edge="end" aria-label="comments">
                        <VerifiedUserIcon color="primary" />
                    </IconButton>) : (<></>)
                }>
                <ListItemAvatar>
                    <Avatar alt='avatar' src={user?.avatarImageUrl ?? ''} />
                </ListItemAvatar>
                <ListItemText
                    primary={user?.name ?? 'N/A'}
                    secondary={`${user?.createdAt}加入` ?? 'N/A'} />
            </ListItem>
            <Divider variant="inset" />
        </>
    )
}