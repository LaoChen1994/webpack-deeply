import React, { Component } from 'react'

export default class About extends Component {

  onClick() {
    alert('it is me~1234')
  }

  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        About You Name, what is?
      </div>
    )
  }
}
