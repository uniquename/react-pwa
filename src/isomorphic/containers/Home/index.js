import React, { Component } from 'react'

import './styles.css'

import asyncComponent from '../../components/asyncComponent'

import compA from './compA'

//
const compB = asyncComponent(() => import('./compB')
  .then(module => module.default), { name: 'compB' });

class Home extends Component {
  render() {
    return (
      <div>
        <compA/>
        <compB/>
      </div>
    )
  }
}

export default Home
