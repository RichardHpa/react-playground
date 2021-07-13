import PropTypes from 'prop-types';
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  useTheme,
  useMediaQuery,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import HeightIcon from '@material-ui/icons/Height';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import clsx from 'clsx';
import { NavLink as RouterLink } from 'react-router-dom';
import { useAuth } from 'context/AuthenticationContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    border: 'none',
    backgroundColor: theme.palette.background.main,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItem: {
    borderRadius: '0 24px 24px 0',
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    '& > *': {
      color: theme.palette.secondary.contrastText,
    },
  },
  isLoggedIn: {
    minHeight: 112,
  },
  // Sidebar Toggler at bottom
  menuContainer: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  menuContent: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  iconOpen: {
    color: '#223368',
    transform: 'rotate(180deg)',
  },
}));

const dummyList = [
  'Inbox',
  'Starred',
  'Send email',
  'Sent email',
  'Snoozed',
  'Drafts',
  'All mail',
  'Trash',
  'Spam',
  'Deleted Messages',
  'Categories',
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
];

const ListNavItems = () => {
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        component={RouterLink}
        to="/"
        exact
        activeClassName={classes.active}
        className={classes.listItem}
      >
        <ListItemIcon>
          <HomeIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/scroll"
        activeClassName={classes.active}
        className={classes.listItem}
      >
        <ListItemIcon>
          <HeightIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="Scroll" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/react-query"
        activeClassName={classes.active}
        className={classes.listItem}
      >
        <ListItemIcon>
          <SyncAltIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="React Query" />
      </ListItem>
      <ListItem
        button
        component={RouterLink}
        to="/select-testing"
        activeClassName={classes.active}
        className={classes.listItem}
      >
        <ListItemIcon>
          <SyncAltIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="Select Testing" />
      </ListItem>
    </>
  );
};

const DummyList = () => {
  const classes = useStyles();
  return (
    <>
      {dummyList.map((text, index) => (
        <ListItem button key={text} className={classes.listItem}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </>
  );
};

const Sidebar = ({ open = true, toggleNav = () => {} }) => {
  const classes = useStyles();
  const { user } = useAuth();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  if (mobileView) {
    return (
      <Drawer open={open} onClose={toggleNav}>
        <Divider />
        <List
          component="nav"
          aria-labelledby="in-app-list-subheader"
          subheader={
            <ListSubheader component="div" id="in-app-list-subheader">
              In App pages
            </ListSubheader>
          }
        >
          <ListNavItems />
        </List>
        <Divider />
        <List
          component="nav"
          aria-labelledby="dummy-list-subheader"
          subheader={
            <ListSubheader component="div" id="dummy-list-subheader">
              Dummy List
            </ListSubheader>
          }
        >
          <DummyList />
        </List>
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.menuContainer}>
        <div className={classes.menuContent}>
          <div className={clsx(classes.toolbar, { [classes.isLoggedIn]: Boolean(user) })} />
          <Divider />
          <List
            component="nav"
            aria-labelledby="in-app-list-subheader"
            subheader={
              <Collapse in={open}>
                <ListSubheader component="div" id="in-app-list-subheader">
                  In App pages
                </ListSubheader>
              </Collapse>
            }
          >
            <ListNavItems />
          </List>
          <Divider />
          <List
            component="nav"
            aria-labelledby="dummy-list-subheader"
            subheader={
              <Collapse in={open}>
                <ListSubheader component="div" id="dummy-list-subheader">
                  Dummy List
                </ListSubheader>
              </Collapse>
            }
          >
            <DummyList />
          </List>
          <Divider />
        </div>

        <div className={classes.menuFooter}>
          <Divider />
          <Tooltip title="Toggle Sidebar">
            <IconButton onClick={toggleNav}>
              <MenuOpenIcon className={open ? classes.iconOpen : ''} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggleNav: PropTypes.func,
};

export default Sidebar;
