import { useState } from 'react';
import './App.css';
import { Badge, BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import {
  Restore as RestoreIcon,
  VerifiedUser as UserIcon,
  MessageRounded as MessagesIcon,
  SupervisedUserCircle as UsersIcon,
} from '@mui/icons-material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Me from './Me';
import Users from './Users';
import Universities from './Universities';
import University from './University';
import UserAuthenInfos from './UserAuthenInfos';
import Login from './Login';
import CreateUniversity from './CreateUniversity';

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
      <Routes>
        <Route path='/universities' element={<Universities />} />
      </Routes>
      <Routes>
        <Route path="/university">
          <Route path=":id" element={<University />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/userautheninfos" element={<UserAuthenInfos />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/create-university" element={<CreateUniversity />} />
      </Routes>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            if (newValue === 3) {
              navigate('/me', { replace: true })
            }
            if (newValue === 0) {
              navigate('/', { replace: true })
            }
            if (newValue === 1) {
              navigate('/users', { replace: true })
            }
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Users" icon={<UsersIcon />} />
          <BottomNavigationAction
            label="Messages"
            icon={
              <Badge badgeContent={4} color="primary">
                <MessagesIcon />
              </Badge>
            } />
          <BottomNavigationAction label="Me" icon={<UserIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default App;
