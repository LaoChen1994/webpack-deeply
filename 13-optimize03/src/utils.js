import React, { Component } from 'react'

export function getAsyncComponent(load) {
  return  class LoadComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    
    componentDidMount() {
      load().then(({default: component}) => {
        console.log(component)
        console.log(this)
        this.setState({ component })
      })
    }

    render() {
      console.log('state ->', this.state)
      const { component } = this.state || {}
      return component ? React.createElement(component) : null
    }
  }
}
