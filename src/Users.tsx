import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper } from "@mui/material"
import { Virtuoso } from "react-virtuoso"
import { UsersQuery, useUsersQuery } from "./generated/graphql"
import { Comment as CommentIcon, VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';

export default () => {
    const { loading, error, data, fetchMore } = useUsersQuery({
        variables: {
            first: 20,
        }
    })

    if (loading) return <div> Loading... </div>

    console.error({ data, error, loading })
    const pageInfo = data?.usersWithRelay.pageInfo

    const itemContent = (index: number, usersQuery: UsersQuery | undefined) => {
        const user = usersQuery?.usersWithRelay.edges[index].node
        const verified = user?.credential;

        return (
            <ListItem button secondaryAction={
                verified ? (<IconButton edge="end" aria-label="comments">
                    <VerifiedUserIcon color="primary"/>
                </IconButton>) : (<></>)
            }>
                <ListItemAvatar>
                    <Avatar alt='avatar' src={user?.avatarImageUrl ?? ''} />
                </ListItemAvatar>
                <ListItemText
                    primary={user?.name ?? 'N/A'}
                    secondary={`${user?.createdAt}加入` ?? 'N/A'} />
            </ListItem>
        )
    }

    return (
        <Paper sx={{ backgroundColor: '#eee', flexGrow: 1, height: '100%' }}>
            <Virtuoso
                style={{ height: 'calc(100vh - 56px' }}
                totalCount={data?.usersWithRelay.edges.length ?? 0}
                itemContent={(index) => itemContent(index, data)}
                endReached={index => {
                    fetchMore({
                        variables: {
                            after: pageInfo?.endCursor,
                            first: 10
                        }
                    })
                }} />
        </Paper>
    )
}