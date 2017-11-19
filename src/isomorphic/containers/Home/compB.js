import React, { Component } from 'react'

import './styles.css'

class compB extends Component {
  render() {
    return (
      <div>
        <p className="text">
          This component is loaded asynchronously, thus not rendered on the server.
        </p>
      </div>
    )
  }
}

export default compB
