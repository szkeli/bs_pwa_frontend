import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, ImageList, ImageListItem, CardActions } from "@mui/material"
import {
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteIconOutlined,
    CommentRounded as CommentIconOutlined,
    MoreVert as MoreVertIcon,
    Add as AddIcon,
} from '@mui/icons-material';

export interface PostItemProps {
    post?: {
        content: string
        createdAt: string
        creator?: {
            name: string
            avatarImageUrl?: string | null | undefined
        } | null | undefined
        images: (string | null)[]
        votesWithRelay: {
            totalCount?: number | null | undefined
            viewerHasUpvoted: boolean
        }
        commentsWithRelay: {
            totalCount?: number | null | undefined
        }
    } | null
}

export default (props: PostItemProps) => {
    const post = props.post
    const viewerHasUpvoted = post?.votesWithRelay?.viewerHasUpvoted ?? false
    const votesCount = post?.votesWithRelay?.totalCount ?? 0
    const commentsCount = post?.commentsWithRelay?.totalCount ?? 0
    const avatarImageUrl = post?.creator?.avatarImageUrl ?? ''
    const creatorName = post?.creator?.name ?? 'Anonymouse'
    const createdAt = post?.createdAt
    const content = post?.content
    const images = post?.images

    return (
        <Card sx={{ marginTop: '10px', marginBottom: '10px', borderRadius: '0' }} elevation={0}>
            <CardHeader
                avatar={
                    <Avatar alt="avatar" src={avatarImageUrl} />
                }
                title={creatorName}
                subheader={createdAt}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            {
                images ? <ImageList variant="masonry" cols={3} gap={8}>
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
                </ImageList> : <></>
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