import * as  React from 'react'
import './index.scss'

export default class Tag extends React.Component {
  render() {
    const { type, children } = this.props

    return (
      <span className={`tag ${type}`}>
        {children}
      </span>
    )
  }
}
