import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { getAsyncComponent } from './utils'

import './index.css'

const Loading = () => {
  return <div>加载中请等待......</div>
}

const LoadableHome = Loadable({
  loader: () => import('./pages/Home'),
  loading() {
    return <Loading />
  }
})

const LoadableAbout = Loadable({
  loader: () => import('./pages/About'),
  loading() {
    return <Loading />
  }
})

// const LoadableIntro = Loadable({
//   loader: () => import('./pages/Intro'),
//   loading() {
//     return <Loading />
//   }
// })

const AsyncIntro = getAsyncComponent(() => import(/*webpackChunkName: 'intro'*/'./pages/Intro'))

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div className="tab">
          <div className="tab-item">
            <Link to="/home">Home</Link>
          </div>
          <div className="tab-item">
            <Link to="/About">About</Link>
          </div>
          <div className="tab-item">
            <Link to="Intro">Intro</Link>
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route path="/home">
              <LoadableHome />
            </Route>
            <Route path="/about">
              <LoadableAbout />
            </Route>
            <Route path="/intro">
              <AsyncIntro />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))