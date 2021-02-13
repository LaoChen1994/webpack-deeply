import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, Tag } from './lib/index'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      tagType: true
    }
  }

  onClick () {
    console.log('新年快乐')
    const { tagType } = this.state
    this.setState({ tagType: !tagType })
  }

  render() {
    const { tagType } = this.state
    return (
      <>
        <Button onClick={this.onClick.bind(this)}>
          2021
        </Button>
        <Tag type={tagType ? 'success' : 'fail'}>{tagType ? '成功' : '失败'}</Tag>
      </>  
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
