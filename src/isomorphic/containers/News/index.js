import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'

import { withStyles } from 'material-ui/styles'
import common from 'material-ui/colors/common'

const API = 'https://hn.algolia.com/api/v1/search?query='
const DEFAULT_QUERY = 'redux'

const styles = {
  a: {
    color: common['darkBlack'],
    fontFamily: 'Roboto, sans-serif',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'zoom-in',
      textDecoration: 'underline',
    }
  }
}

class News extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {

    this.setState({ isLoading: true })

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { classes } = this.props
    const { hits, isLoading } = this.state

    if (isLoading) {
      return (
        <div className="loading-skeleton">
          <Skeleton count={20}/>
        </div>
      )
    }

    return (
      <div>
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url} className={classes.a} target="_blank">{hit.title}</a>
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(News)
