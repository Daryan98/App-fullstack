import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import NavigationBar from '../../Containers/NavigationBar';

class PagesTemplate extends Component {
  render(){
    const { children } = this.props;
    return(
      <Fragment>
        <NavigationBar />
        <main>
          {children}
        </main>
      </Fragment>
    )
  }
}

PagesTemplate.propTypes = {}

export default PagesTemplate;