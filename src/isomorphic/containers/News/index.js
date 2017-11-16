import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {

    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loading-skeleton">
          <Skeleton count={20}/>
        </div>
      );
    }

    return (
      <div>
        {hits.map(hit =>
          <div className="news" key={hit.objectID}>
            <a href={hit.url} target="_blank">{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}

export default Page;
