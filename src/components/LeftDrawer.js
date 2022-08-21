import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 260;

const sideMenus = [
  { text: 'ホーム', link: "/" },
  { text: '月次レポート', link: "/report/month" },
  { text: '年次レポート', link: "/report/year" },
];
const sideMenuIcons = [<HomeIcon />, <AnalyticsIcon />, <AnalyticsIcon />]

function AvatarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="avatar-button"
        open={open}
        onClick={handleClick}
      >
        <Avatar sx={{ height: '32px', width: '32px' }}>H</Avatar>
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Setting</MenuItem>
      </Menu>
    </>

  )
}

export default function ClippedDrawer(props) {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <CssBaseline />
        <Box sx={{ overflow: 'auto' }}>
          <Typography variant="h5" component="h6" sx={{ p: 2 }}>
            家計簿App
          </Typography>
          <List>
            {sideMenus.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {sideMenuIcons[index]}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider color="white" />
          <List>
            {['マイページ', '設定'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {index % 2 === 0 ? <PersonIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ m: 1 }}>
          <ListItemButton > {/* #f44336 */}
            Logout
          </ListItemButton>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          height: 'auto',
          minHeight: '100vh',
          height: '100%',
          width: `calc(100vw - ${drawerWidth}px)`,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
