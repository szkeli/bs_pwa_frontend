import { Avatar, ListItem, ListItemAvatar, Paper, SpeedDial } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import { UserautheninfosQuery, useUserautheninfosQuery } from "./generated/graphql"
import {
    Add as AddIcon,
} from '@mui/icons-material';

export default () => {
    const { loading, error, data, fetchMore } = useUserautheninfosQuery();

    console.error(error)
    if (loading) return <div> Loading... </div>
    if(error) return <div>Something went wrong...</div>

    const pageInfo = data?.userAuthenInfos.pageInfo
   
    const itemContent = (index: number, userAuthenInfosQuery: UserautheninfosQuery | undefined) => {
        const userAuthenInfo = userAuthenInfosQuery?.userAuthenInfos.edges[index].node

        return <UserAuthenInfoItem userAuthenInfo={userAuthenInfo}/>
    }

    return (
        <Paper sx={{backgroundColor: '#eee', flexGrow: 1, height: '100%' }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: 'calc(100vh - 56px)', flexGrow: 1 }}
                totalCount={data?.userAuthenInfos.edges.length ?? 0}
                itemContent={(index) => itemContent(index, data)}
                endReached={index => {
                    fetchMore({
                        variables: {
                            after: pageInfo?.endCursor,
                            first: 10,
                        }
                    })
                }}
            >
            </Virtuoso>
        </Paper>
    )
}

interface UserAuthenInfoItemProps {
    userAuthenInfo: {
        avatarImageUrl: string
    } | undefined | null
}

function UserAuthenInfoItem(props: UserAuthenInfoItemProps) {
    const userAuthenInfo = props.userAuthenInfo
    const avatarImageUrl = userAuthenInfo?.avatarImageUrl ?? ''

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt="avatar" src={avatarImageUrl} />
            </ListItemAvatar>
        </ListItem>
    )
}