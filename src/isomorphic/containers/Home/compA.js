import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import common from 'material-ui/colors/common'

const styles = theme => ({
  root: {
    color: common['darkBlack'],
    fontFamily: 'Roboto, sans-serif',
  },
});

class compA extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <p className={classes.root}>
          This component is loaded synchronously, thus it is rendered on the server.
        </p>
      </div>
    )
  }
}

export default withStyles(styles)(compA)
