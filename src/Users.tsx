import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material"
import { Virtuoso } from "react-virtuoso"
import { UsersQuery, useUsersQuery } from "./generated/graphql"
import { VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';

export default () => {
    const { loading, error, data, fetchMore } = useUsersQuery({
        variables: {
            first: 20,
        }
    })

    if (loading) return <div> Loading... </div>

    const pageInfo = data?.usersWithRelay.pageInfo

    const itemContent = (index: number, usersQuery: UsersQuery | undefined) => {
        const user = usersQuery?.usersWithRelay.edges[index].node
        const verified = user?.credential;

        return (
            <>
                <ListItem button secondaryAction={
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

    return (
        <Paper sx={{ flexGrow: 1, height: '100%' }}>
            <Virtuoso
                style={{ height: 'calc(100vh - 56px)', flexGrow: 1 }}
                totalCount={data?.usersWithRelay.edges.length ?? 0}
                itemContent={(index) => itemContent(index, data)}
                endReached={() => {
                    fetchMore({
                        variables: {
                            after: pageInfo?.endCursor,
                            first: 20
                        }
                    })
                }} />
        </Paper>
    )
}