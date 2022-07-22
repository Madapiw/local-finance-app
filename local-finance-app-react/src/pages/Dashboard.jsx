import React, { Component } from 'react'
import NavBar from '../components/NavBarProtected'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBarProtected />
        Dashboard
      </div>
    )
  }
}
