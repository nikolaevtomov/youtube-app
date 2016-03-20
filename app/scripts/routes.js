import React, { Component } from 'react'
// import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

export default class extends Component {

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    )
  }

}
