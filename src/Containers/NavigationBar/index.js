import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';

const styles = () => ({
  root: {
    width: '100%',
    height: 80,
  }
})

class NavigationBar extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        
      </div>
    )
  }
}

NavigationBar.propTypes = {}

export default withStyles(styles)(NavigationBar);