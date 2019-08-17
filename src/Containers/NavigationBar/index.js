import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { withStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MdPerson, MdReorder, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { colors } from '../../styleVariables';
import Menu from './profileMenu';

import { forwordTo } from '../../index';
import routes from '../../routes';


const styles = theme => ({
  root: {
    width: 'calc(100% - 80px)',
    height: 60,
    padding: '5px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
  },
  navButton: {
    minWidth: 50,
    minHeight: 50,
    borderRadius: 25,
    backgroundColor: colors.purple,
    color: colors.white,
    fontSize: 20,
    padding: 0,
    '&:hover': {
      color: colors.purple,
    }
  },
  drawerPaper: {
    width: 250,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuCloseButton: {
    width: 40,
    height: 40,
  },
  LoginBox: {
    minWidth: 80,
  },
  icons: {
    width: 'auto',
  },
  login: {
    fontSize: 14,
  }
})

class NavigationBar extends Component {
  state = {anchorEl: null, openMenu: false}
  openUserMenu = (e) => {
    this.setState({anchorEl: e.currentTarget})
  }

  closeUserMenu = () => {
    this.setState({anchorEl: null})
  }
  openDrawer = () => {
    this.setState({openMenu: true})
  }
  closeDrawer = () => {
    this.setState({openMenu: false})
  }

  render(){
    const { classes } = this.props;
    const { anchorEl, openMenu } = this.state;

    return(
      <div className={classes.root}>
        <div className={classes.nav}>
          <Button 
            className={classnames(classes.navButton, classes.navButton)} 
            onClick={this.openDrawer}
          > 
            <MdReorder className={classes.icons} />
          </Button>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={openMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton 
                onClick={this.closeDrawer} 
                className={classnames(classes.menuCloseButton, classes.navButton)} 
              >
                {openMenu ? <MdChevronLeft /> : <MdChevronRight />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem>Test</ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>Test</ListItem>
            </List>
          </Drawer>
        </div>
        <div className={classes.middle}>
          <Typography component="span" className={classes.title}>APP</Typography>
        </div>
        <div className={classes.userBox}>
          <Button 
            className={classnames(classes.LoginBox, classes.navButton)} 
            onClick={this.openUserMenu}
          >
            {/* <MdPerson className={classes.icons}/> */}
            <Typography component="span" onClick={() => forwordTo(routes.SIGN_IN)} className={classes.login}>Login</Typography>
          </Button>
          {/* <Menu anchorEl={anchorEl} closeUserMenu={this.closeUserMenu} /> */}
        </div>
      </div>
    )
  }
}

NavigationBar.propTypes = {}

export default withStyles(styles)(NavigationBar);