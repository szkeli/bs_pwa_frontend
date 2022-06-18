import { VerifiedUserRounded as VerifiedUserRoundedIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, ListItemAvatar } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { UserQueryHookResult, useUserQuery } from "./generated/graphql";

export default function UserPage() {
    let { id } = useParams();
    const res = useUserQuery({
        variables: {
            id: id ?? '',
        }
    })
    if (!id) return <div>Error</div>
    
    const { loading, error } = res

    if (error) return <div>Something gone error...</div>
    if (loading) return <div>Loading...</div>

    return (
        <Box>
            <Header userQueryHookResult={res} />
        </Box>
    )
}

function Header(props: {userQueryHookResult?: UserQueryHookResult}) {
    const user = props.userQueryHookResult?.data?.user;

    return (
        <ListItem secondaryAction={
            <IconButton>
                <VerifiedUserRoundedIcon />
            </IconButton>
        }>
            <ListItemAvatar>
                <Avatar alt='avatar' src={user?.avatarImageUrl ?? ''} />
            </ListItemAvatar>
        </ListItem>
    )
}