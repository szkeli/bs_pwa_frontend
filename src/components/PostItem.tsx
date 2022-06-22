import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  ImageList,
  ImageListItem,
  CardActions,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Box,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteIconOutlined,
  CommentRounded as CommentIconOutlined,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { useState } from "react";
import {
  PostVotesQuery,
  useAddUpvoteOnPostMutation,
  usePostVotesQuery,
} from "../generated/graphql";
import { Virtuoso } from "react-virtuoso";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export interface PostItemProps {
  post?: {
    id: string;
    content: string;
    createdAt: string;
    creator?:
      | {
          id: string;
          name: string;
          avatarImageUrl?: string | null | undefined;
        }
      | null
      | undefined;
    images: (string | null)[];
    votesWithRelay: {
      totalCount?: number | null | undefined;
      viewerHasUpvoted: boolean;
    };
    commentsWithRelay: {
      totalCount?: number | null | undefined;
    };
  } | null;
}

function VotesList(props: { postId: string | undefined }) {
  const { data, loading, error, fetchMore } = usePostVotesQuery({
    variables: {
      id: props.postId ?? "",
      first: 10,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const votes = data?.post.votesWithRelay.edges;
  const pageInfo = data?.post.votesWithRelay.pageInfo;

  const itemContent = (index: number, data?: PostVotesQuery | undefined) => {
    const edges = data?.post.votesWithRelay.edges;

    if (!edges) return <div>Error...</div>;

    const creator = edges[index].node?.creator;

    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="avatar" src={creator?.avatarImageUrl ?? "N/A"} />
        </ListItemAvatar>
        <ListItemText primary={creator?.name ?? "N/A"} />
      </ListItem>
    );
  };
  return (
    <Virtuoso
      style={{ height: "50vh", flexGrow: 1 }}
      totalCount={votes?.length ?? 0}
      itemContent={(index) => itemContent(index, data)}
      endReached={() => {
        fetchMore({
          variables: {
            after: pageInfo?.endCursor,
            first: 20,
          },
        });
      }}
    />
  );
}

function MAvatar(props: PostItemProps) {
  const creator = props.post?.creator;
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/user/${creator?.id}`);
      }}
    >
      <Avatar alt="avatar" src={creator?.avatarImageUrl ?? ""} />
    </Container>
  );
}

export default function PostItem(props: PostItemProps) {
  const [addUpvote, { data, loading, error }] = useAddUpvoteOnPostMutation();
  const post = props.post;
  const viewerHasUpvoted = post?.votesWithRelay?.viewerHasUpvoted ?? false;
  const votesCount = post?.votesWithRelay?.totalCount ?? 0;
  const commentsCount = post?.commentsWithRelay?.totalCount ?? 0;
  const creatorName = post?.creator?.name ?? "Anonymouse";
  const createdAt = post?.createdAt;
  const content = post?.content;
  const images = post?.images;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} fullWidth onClose={handleClose} scroll="paper">
        <DialogTitle>点赞列表</DialogTitle>
        <DialogContent dividers={true}>
          <VotesList postId={post?.id} />
        </DialogContent>
      </Dialog>
      <Card
        sx={{ marginTop: "10px", marginBottom: "10px", borderRadius: "0" }}
        elevation={0}
      >
        <CardHeader
          avatar={<MAvatar post={props.post} />}
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
        {images ? (
          <ImageList variant="masonry" cols={3} gap={8}>
            {images?.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={item ?? ""}
                  srcSet={item ?? ""}
                  alt={item ?? ""}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <></>
        )}
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              addUpvote({
                variables: {
                  postId: post?.id ?? "",
                },
              });
            }}
          >
            {viewerHasUpvoted ? <FavoriteIcon /> : <FavoriteIconOutlined />}
          </IconButton>
          <Button variant="text" onClick={handleOpen}>
            {votesCount}人点赞
          </Button>
          <IconButton aria-label="add comments">
            <CommentIconOutlined />
          </IconButton>
          {commentsCount}条评论
        </CardActions>
      </Card>
    </>
  );
}
