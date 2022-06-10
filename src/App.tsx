import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostsQuery, usePostsQuery } from './generated/graphql';
import { Virtuoso } from 'react-virtuoso';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, List, ListItemAvatar, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { Restore as RestoreIcon, Favorite as FavoriteIcon, VerifiedUser as UserIcon } from '@mui/icons-material';

function App() {
  const { loading, error, data, fetchMore } = usePostsQuery({
    variables: {
      first: 100
    }
  });
  const [value, setValue] = useState(0);

  if (loading) return <div> Loading... </div>
  console.error({
    loading, error, data
  })

  const pageInfo = data?.postsWithRelay.pageInfo

  const itemContent = (index: number, postsQuery: PostsQuery | undefined) => {
    return (
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt="avatar" src={postsQuery?.postsWithRelay.edges[index].node?.creator?.avatarImageUrl ?? ''} />
        </ListItemAvatar>
        <ListItemText>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {postsQuery?.postsWithRelay.edges[index].node?.content}
          </Typography>
        </ListItemText>
      </ListItemButton>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Paper sx={{ flexGrow: 1, height: '100%' }}>
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
      <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Me" icon={<UserIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default App;
