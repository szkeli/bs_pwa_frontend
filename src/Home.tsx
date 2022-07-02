import {
  AppBar,
  Avatar,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  SpeedDial,
  Toolbar,
} from "@mui/material";
import {
  PostsQuery,
  usePostsQuery,
  useUniversitiesQuery,
} from "./generated/graphql";
import { Add as AddIcon } from "@mui/icons-material";
import { Virtuoso } from "react-virtuoso";
import PostItem from "./components/PostItem";
import { useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { useUniversitySelector } from "./hooks";
import { useState } from "react";
import { Container } from "@mui/system";

function UniversitySelector() {
  const { universityState, setUniversityState } = useUniversitySelector();
  const { data, error, loading } = useUniversitiesQuery();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const universities = data?.universities.edges.map((i) => i.node);

  const handleListItemClick = (index: number) => {
    if (!universities) {
      setOpen(false);
      return;
    }
    const u = universities[index];
    setUniversityState({
      id: u?.id ?? "",
      name: u?.name ?? "",
      logoUrl: u?.logoUrl ?? "",
    });
    setOpen(false);
  };

  if (error) return <div>Error</div>;
  if (loading) return <div>loading</div>;

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>选择大学</DialogTitle>
        <List>
          {universities?.map((i, index) => (
            <ListItem
              button
              onClick={() => handleListItemClick(index)}
              key={index}
            >
              <ListItemAvatar>
                <Avatar alt={i?.name ?? "avatar"} src={i?.logoUrl ?? ""} />
              </ListItemAvatar>
              <ListItemText primary={i?.name ?? "N/A"} />
            </ListItem>
          ))}
        </List>
      </Dialog>
      <IconButton onClick={handleOpen}>
        <Avatar
          sx={{ bgcolor: "white" }}
          alt={universityState ? universityState.name : "N/A"}
          src={universityState ? universityState.logoUrl : "N/A"}
        />
      </IconButton>
    </>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { loading, error, data, fetchMore } = usePostsQuery();

  if (loading) return <div> Loading... </div>;
  if (error) return <div>Something went wrong...</div>;

  const pageInfo = data?.postsWithRelay.pageInfo;

  const itemContent = (index: number, postsQuery: PostsQuery | undefined) => {
    const post = postsQuery?.postsWithRelay.edges[index].node;
    return <PostItem post={post} />;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <UniversitySelector />
          <Container onClick={() => {
            navigate('/search')
          }}>
            <SearchBar />
          </Container>
        </Toolbar>
      </AppBar>
      <Paper sx={{ backgroundColor: "#eee", flexGrow: 1, height: "100%" }}>
        <SpeedDial
          onClick={() => {
            navigate("/create-post");
          }}
          ariaLabel="SpeedDial"
          sx={{ position: "fixed", bottom: "calc(56px + 16px)", right: 16 }}
          icon={<AddIcon />}
        />
        <Virtuoso
          style={{ height: "calc(100vh - 56px)", flexGrow: 1 }}
          totalCount={data?.postsWithRelay.edges.length ?? 0}
          itemContent={(index) => itemContent(index, data)}
          endReached={(index) => {
            fetchMore({
              variables: {
                after: pageInfo?.endCursor,
                first: 10,
              },
            });
          }}
        ></Virtuoso>
      </Paper>
    </>
  );
}
