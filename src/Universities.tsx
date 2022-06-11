import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material"
import { Virtuoso } from "react-virtuoso"
import { UniversitiesQuery, useUniversitiesQuery } from "./generated/graphql"

export default () => {
    const { loading, error, data, fetchMore } = useUniversitiesQuery({
        variables: {
            first: 20,
        }
    })

    if (loading) return <div> Loading... </div>

    const pageInfo = data?.universities.pageInfo

    const itemContent = (index: number, universitiesQuery: UniversitiesQuery | undefined) => {
        const university = universitiesQuery?.universities.edges[index].node

        return (
            <>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt='avatar' src={university?.logoUrl ?? ''} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={university?.name} />
                </ListItem>
                <Divider variant="inset" />
            </>
        )
    }

    return (
        <Paper sx={{ flexGrow: 1, height: '100%' }}>
            <Virtuoso
                style={{ height: 'calc(100vh - 56px', flexGrow: 1 }}
                totalCount={data?.universities.edges.length ?? 0}
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