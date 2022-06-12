import { Card, CardHeader,  Avatar, IconButton, CardContent, Typography, ImageList, ImageListItem, CardActions, Paper, SpeedDial } from "@mui/material";
import { PostsQuery, usePostsQuery } from "./generated/graphql";
import {
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteIconOutlined,
    CommentRounded as CommentIconOutlined,
    MoreVert as MoreVertIcon,
    Add as AddIcon,
} from '@mui/icons-material';
import { Virtuoso } from "react-virtuoso";
import PostItem from "./components/PostItem";

export default () => {
    const { loading, error, data, fetchMore } = usePostsQuery();
    
    if (loading) return <div> Loading... </div>
    if(error) return <div>Something went wrong...</div>

    const pageInfo = data?.postsWithRelay.pageInfo

    const itemContent = (index: number, postsQuery: PostsQuery | undefined) => {
        const post = postsQuery?.postsWithRelay.edges[index].node
        const images = postsQuery?.postsWithRelay.edges[index].node?.images as string[]
        const votesCount = postsQuery?.postsWithRelay.edges[index].node?.votesWithRelay.totalCount ?? 0
        const viewerHasUpvoted = postsQuery?.postsWithRelay.edges[index].node?.votesWithRelay.viewerHasUpvoted ?? false
        const commentsCount = postsQuery?.postsWithRelay.edges[index].node?.commentsWithRelay.totalCount ?? 0

        return <PostItem post={post} />
    }

    return (
        <Paper sx={{backgroundColor: '#eee', flexGrow: 1, height: '100%' }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: 'calc(100vh - 56px)', flexGrow: 1 }}
                totalCount={data?.postsWithRelay.edges.length ?? 0}
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