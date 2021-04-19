import React, { Component } from 'react'

export default class About extends Component {

  onClick() {
    alert('it is me~')
  }

  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        About You Name
      </div>
    )
  }
}
