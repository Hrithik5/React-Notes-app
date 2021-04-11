import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from '@material-ui/core'
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        header: {
            flexGrow: 1
        },
    }
})

function Layout({ children }) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='primary' />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='primary' />,
            path: '/create'
        },
    ]
    return (
        <div className={classes.root}>

            {/* App bar */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.header}>
                        Welcome to Notes App
                    </Typography>
                    <Typography>
                        Noah
                    </Typography>
                </Toolbar>
            </AppBar>


            {/* side bar */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h4" className={classes.title}>
                        Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
