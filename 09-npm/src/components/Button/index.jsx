import * as React from 'react'

import './index.scss'

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props
    return (
      <div className='myBtn' onClick={onClick}>
        { children }
      </div>
    )
  }
}

export default Button
