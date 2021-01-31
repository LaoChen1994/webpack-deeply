import React from 'react'
import { renderToString } from 'react-dom/server'
import { AppComponent } from './AppComponent.jsx'

export function render() {
  return renderToString(<AppComponent />)
}
