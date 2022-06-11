import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, ImageList, ImageListItem, CardActions, Paper } from "@mui/material";
import { PostsQuery, usePostsQuery } from "./generated/graphql";
import {
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteIconOutlined,
    CommentRounded as CommentIconOutlined,
    MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { Virtuoso } from "react-virtuoso";

export default () => {
    const { loading, error, data, fetchMore } = usePostsQuery({
        variables: {
            first: 10
        }
    });
    if (loading) return <div> Loading... </div>

    const pageInfo = data?.postsWithRelay.pageInfo

    const itemContent = (index: number, postsQuery: PostsQuery | undefined) => {
        const images = postsQuery?.postsWithRelay.edges[index].node?.images as string[]
        const votesCount = postsQuery?.postsWithRelay.edges[index].node?.votesWithRelay.totalCount ?? 0
        const viewerHasUpvoted = postsQuery?.postsWithRelay.edges[index].node?.votesWithRelay.viewerHasUpvoted ?? false
        const commentsCount = postsQuery?.postsWithRelay.edges[index].node?.commentsWithRelay.totalCount ?? 0

        return (
            <Card sx={{ marginTop: '10px', marginBottom: '10px', borderRadius: '0'}} elevation={0}>
                <CardHeader
                    avatar={
                        <Avatar alt="avatar" src={postsQuery?.postsWithRelay.edges[index].node?.creator?.avatarImageUrl ?? ''} />
                    }
                    title={postsQuery?.postsWithRelay.edges[index].node?.creator?.name ?? 'Anonymous'}
                    subheader={postsQuery?.postsWithRelay.edges[index].node?.createdAt}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {postsQuery?.postsWithRelay.edges[index].node?.content}
                    </Typography>
                </CardContent>
                {
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {images?.map((item) => (
                            <ImageListItem key={item}>
                                <img
                                    src={item ?? ''}
                                    srcSet={item ?? ''}
                                    alt={item ?? ''}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                }
                <CardActions disableSpacing>
                    <IconButton aria-label='add to favorites'>
                        {viewerHasUpvoted ? (<FavoriteIcon />) : (<FavoriteIconOutlined />)}
                    </IconButton>
                    {votesCount}点赞
                    <IconButton aria-label='add comments'>
                        <CommentIconOutlined />
                    </IconButton>
                    {commentsCount}评论
                </CardActions>
            </Card>
        )
    }

    return (
        <Paper sx={{backgroundColor: '#eee', flexGrow: 1, height: '100%' }}>
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