import { VerifiedUserRounded as VerifiedUserRoundedIcon } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { Gender, UserQueryHookResult, useUserQuery } from "./generated/graphql";

export default function UserPage() {
  let { id } = useParams();
  const res = useUserQuery({
    variables: {
      id: id ?? "",
    },
  });
  if (!id) return <div>Error</div>;

  const { loading, error } = res;

  if (error) return <div>Something gone error...</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Box>
      <Header userQueryHookResult={res} />
    </Box>
  );
}

function handleGender(gender: Gender | undefined | null) {
  if (gender === undefined || gender === null || gender === Gender.None) {
    return "Ta";
  }
  if (gender === Gender.Female) {
    return "她";
  }
  if (gender === Gender.Male) {
    return "他";
  }
}

function Header(props: { userQueryHookResult?: UserQueryHookResult }) {
  const user = props.userQueryHookResult?.data?.user;
  const label = `${user?.postsWithRelay.totalCount ?? 0}条帖子`;
  const universityLogo = user?.university?.logoUrl ?? "universityLogo";
  const institutes = user?.institutes?.edges.map((i) => i.node);
  const postsCellTitle = `${handleGender(user?.gender)}发布的白板`;
  const upvotesCellTitle = `${handleGender(user?.gender)}的点赞`;
  const commentsCellTitle = `${handleGender(user?.gender)}的评论`;

  return (
    <>
      <Card>
        <ListItem
          secondaryAction={
            <IconButton>
              <VerifiedUserRoundedIcon
                color={user?.credential ? "primary" : undefined}
              />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar alt="avatar" src={user?.avatarImageUrl ?? ""} />
          </ListItemAvatar>
          <ListItemText primary={user?.name} secondary={label} />
        </ListItem>
        <CardContent>
          {user?.university ? (
            <Chip
              avatar={
                <Avatar alt={user?.name ?? "avatar"} src={universityLogo} />
              }
              label={user?.university?.name}
            />
          ) : (
            <></>
          )}
          {institutes?.map((i) => (
            <Chip
              avatar={<Avatar alt={i?.name} src={i?.logoUrl} />}
              label={i?.name}
            />
          ))}
        </CardContent>
      </Card>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4} key="0">
          <Card>
            <CardContent>
              {`${postsCellTitle} ${user?.postsWithRelay.totalCount ?? 0} 条`}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} key="0">
          <Card>
            <CardContent>
              {`${upvotesCellTitle} ${user?.votesWithRelay.totalCount ?? 0} 个`}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4} key="0">
          <Card>
            <CardContent>
              {`${commentsCellTitle} ${
                user?.commentsWithRelay.totalCount ?? 0
              } 条`}
            </CardContent>
            <CardContent>
                hahah
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
