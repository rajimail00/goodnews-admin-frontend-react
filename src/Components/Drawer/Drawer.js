import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Dashboard from '../../Dashboard/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DynamicFeedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Category"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"News"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AdsClickIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Ads"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CloudUploadIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Uploads"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#ffffff"
                }}
            >
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: '#80868D' }} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                    ></IconButton>
                    <Toolbar style={{ display: 'flex', flexDirection: "row", gap: 30, alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                        >
                            <MessageOutlinedIcon sx={{ color: '#80868D' }} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                        >
                            <NotificationsNoneOutlinedIcon sx={{ color: '#80868D' }} />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                        >
                            <Avatar alt="profile" src="" />
                        </IconButton>
                    </Toolbar>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3,
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        xs: `calc(100% - ${drawerWidth}px)`
                    }, backgroundColor: '#F4F4F4'
                }}
            >
                <Toolbar />
                <Dashboard />
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;