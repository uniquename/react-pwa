import React, { Component } from 'react'

import asyncComponent from '../../components/asyncComponent'

import CompA from './CompA'

const CompB = asyncComponent(() => import('./CompB')
  .then(module => module.default), { name: 'CompB' });

class Home extends Component {
  render() {
    return (
      <div>
        <CompA/>
        <CompB/>
      </div>
    )
  }
}

export default Home
