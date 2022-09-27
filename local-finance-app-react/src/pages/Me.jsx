import React, { Component } from 'react'
import NavBarProtected from '../components/NavBarProtected'

export default class Me extends Component {
  render() {
    return (
        <div>
          <NavBarProtected />
          <div className="container">
            <h1 className="display-2">Me</h1>
          </div>
        </div>
    )
  }
}
