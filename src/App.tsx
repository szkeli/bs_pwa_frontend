import { useState } from 'react';
import './App.css';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  VerifiedUser as UserIcon,
  MessageRounded as MessagesIcon,
  SupervisedUserCircle as UsersIcon,
} from '@mui/icons-material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Me from './Me';
import Users from './Users';

function App() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  
  return (
    <Box sx={{
      display: 'flex', 
      flexDirection: 'column',
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/me" element={<Me />} />
      </Routes>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
      <Paper sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            if(newValue === 4) {
              navigate('/me', {replace: true})
            } 
            if(newValue === 0) {
              navigate('/', {replace: true})
            }
            if(newValue === 2) {
              navigate('/users', {replace: true})
            }
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Users" icon={<UsersIcon />} />
          <BottomNavigationAction label="Messages" icon={<MessagesIcon/>} />
          <BottomNavigationAction label="Me" icon={<UserIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default App;
