import React from 'react'
import './index.css'

export class AppComponent extends React.Component {
  render() {

    const handleClick = () => {
      alert('click')
    }
    
    return (
    <>
      <div className='title'>Hello World</div>
      <button onClick={handleClick}>点击</button>
    </>
    )
  }
}