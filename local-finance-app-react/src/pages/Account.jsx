import React, { Component } from 'react'
import NavBarProtected from '../components/NavBarProtected'

export default class Account extends Component {
  render() {
    return (
      <div>
        <NavBarProtected />
        <div className="container">
          <h1 className="display-2">Account</h1>
        </div>
      </div>
    )
  }
}
